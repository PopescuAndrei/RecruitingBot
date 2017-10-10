package com.github.popescuandrei.recruitingBot.controller;

import static com.github.messenger4j.MessengerPlatform.CHALLENGE_REQUEST_PARAM_NAME;
import static com.github.messenger4j.MessengerPlatform.MODE_REQUEST_PARAM_NAME;
import static com.github.messenger4j.MessengerPlatform.SIGNATURE_HEADER_NAME;
import static com.github.messenger4j.MessengerPlatform.VERIFY_TOKEN_REQUEST_PARAM_NAME;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_SEARCH_POSITION;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.getRandomFallbackAnswer;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.messenger4j.MessengerPlatform;
import com.github.messenger4j.exceptions.MessengerApiException;
import com.github.messenger4j.exceptions.MessengerIOException;
import com.github.messenger4j.exceptions.MessengerVerificationException;
import com.github.messenger4j.receive.MessengerReceiveClient;
import com.github.messenger4j.receive.handlers.FallbackEventHandler;
import com.github.messenger4j.receive.handlers.TextMessageEventHandler;
import com.github.messenger4j.send.MessengerSendClient;
import com.github.popescuandrei.recruitingBot.chat.AiManager;
import com.github.popescuandrei.recruitingBot.chat.FacebookMessageBuilder;

/**
 * This is the main class for inbound and outbound communication with the Facebook Messenger Platform.
 * The callback handler is responsible for the webhook verification and processing of the inbound messages and events.
 * It showcases the features of the Messenger Platform.
 *
 * @author Max Grabenhorst
 */
@RestController
@RequestMapping("/callback")
public class MessengerCallbackController {

    private static final Logger log = LoggerFactory.getLogger(MessengerCallbackController.class);
    
    private final MessengerReceiveClient receiveClient;
    private final MessengerSendClient sendClient;
    
    @Autowired
    private FacebookMessageBuilder facebookMessageBuilder;
    
    @Autowired
    private AiManager aiManager;
    
    /**
     * Constructs the {@code MessengerPlatformCallbackHandler} and initializes the {@code MessengerReceiveClient}.
     *
     * @param appSecret   the {@code Application Secret}
     * @param verifyToken the {@code Verification Token} that has been provided by you during the setup of the {@code
     *                    Webhook}
     * @param sendClient  the initialized {@code MessengerSendClient}
     */
    @Autowired
    public MessengerCallbackController(@Value("${recruitingBot.appSecret}") final String appSecret,
                                            @Value("${recruitingBot.verifyToken}") final String verifyToken,
                                            final MessengerSendClient sendClient) {

    	log.debug("Initializing MessengerReceiveClient - appSecret: {} | verifyToken: {}", appSecret, verifyToken);
        this.receiveClient = MessengerPlatform.newReceiveClientBuilder(appSecret, verifyToken)
                .onTextMessageEvent(newTextMessageEventHandler())
                .fallbackEventHandler(newFallbackEventHandler())
                .build();
        this.sendClient = sendClient;
    }

    /**
     * Webhook verification endpoint.
     *
     * The passed verification token (as query parameter) must match the configured verification token.
     * In case this is true, the passed challenge string must be returned by this endpoint.
     */
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<String> verifyWebhook(@RequestParam(MODE_REQUEST_PARAM_NAME) final String mode,
                                                @RequestParam(VERIFY_TOKEN_REQUEST_PARAM_NAME) final String verifyToken,
                                                @RequestParam(CHALLENGE_REQUEST_PARAM_NAME) final String challenge) {
        try {
            return ResponseEntity.ok(this.receiveClient.verifyWebhook(mode, verifyToken, challenge));
        } catch (MessengerVerificationException e) {
            log.warn("Webhook verification failed: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    /**
     * Callback endpoint responsible for processing the inbound messages and events.
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Void> handleCallback(@RequestBody final String payload,
                                               @RequestHeader(SIGNATURE_HEADER_NAME) final String signature) {
        try {
            this.receiveClient.processCallbackPayload(payload, signature);
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (MessengerVerificationException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

    private TextMessageEventHandler newTextMessageEventHandler() {
        return event -> {

            final String messageText = event.getText();
            final String senderId = event.getSender().getId();
            final Date timestamp = event.getTimestamp();

            String aiResponse = aiManager.sendRequest(messageText, senderId, timestamp);
            if(aiResponse.equals(ACTION_SEARCH_POSITION)) {
            	try {
					facebookMessageBuilder.sendOpenPositionsMessage(this.sendClient, senderId);
				} catch (MessengerApiException | MessengerIOException e) {
					e.printStackTrace();
					facebookMessageBuilder.sendTextMessage(this.sendClient, senderId, getRandomFallbackAnswer());
				}
            } else {
                facebookMessageBuilder.sendTextMessage(this.sendClient, senderId, aiResponse);
            }
        };
    }

    /**
     * This handler is called when either the message is unsupported or when the event handler for the actual event type
     * is not registered. In this showcase all event handlers are registered. Hence only in case of an
     * unsupported message the fallback event handler is called.
     */
    private FallbackEventHandler newFallbackEventHandler() {
        return event -> {
            final String senderId = event.getSender().getId();
            log.info("Received unsupported message from user '{}'", senderId);
        };
    }
}