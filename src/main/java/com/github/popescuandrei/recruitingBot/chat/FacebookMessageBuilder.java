package com.github.popescuandrei.recruitingBot.chat;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.github.messenger4j.exceptions.MessengerApiException;
import com.github.messenger4j.exceptions.MessengerIOException;
import com.github.messenger4j.send.MessengerSendClient;
import com.github.messenger4j.send.NotificationType;
import com.github.messenger4j.send.QuickReply;
import com.github.messenger4j.send.Recipient;
import com.github.messenger4j.send.SenderAction;
import com.github.messenger4j.send.buttons.Button;
import com.github.messenger4j.send.buttons.Button.ListBuilder;
import com.github.messenger4j.send.templates.ButtonTemplate;
import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.service.PositionService;

@Component
@Qualifier("facebookMessageBuilder")
public class FacebookMessageBuilder {

    private final String RESOURCE_URL = "https://raw.githubusercontent.com/fbsamples/messenger-platform-samples/master/node/public";

	private static final Logger log = LoggerFactory.getLogger(FacebookMessageBuilder.class);
	

    @Autowired
    private PositionService positionService;
    
    /**
     * Method use to send a text message in a chat identified by a {@code recipientId}
     * with the {@code text} content
     * @param sendClient
     * @param recipientId
     * @param text
     */
    public void sendTextMessage(MessengerSendClient sendClient, String recipientId, String text) {
        try {
            final Recipient recipient = Recipient.newBuilder().recipientId(recipientId).build();
            final NotificationType notificationType = NotificationType.REGULAR;
            final String metadata = "DEVELOPER_DEFINED_METADATA";

            sendClient.sendTextMessage(recipient, notificationType, text, metadata);
        } catch (MessengerApiException | MessengerIOException e) {
            e.printStackTrace();
        }
    }
    
    /**
     * Method used to send an image message in a chat identified by a {@code recipientId}
     * with the {@code text} content 
     * @param sendClient
     * @param recipientId
     * @throws MessengerApiException
     * @throws MessengerIOException
     */
    public void sendImageMessage(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendImageAttachment(recipientId, RESOURCE_URL + "/assets/rift.png");
    }
    
    /**
     * Method used to send a GIF message in a chat identified by a {@code recipientId}
     * with the {@code text} content
     * @param sendClient
     * @param recipientId
     * @throws MessengerApiException
     * @throws MessengerIOException
     */
    public void sendGifMessage(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendImageAttachment(recipientId, "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif");
    }
    
    /**
     * Method used to send a video message in a chat identified by a {@code recipientId}
     * with the {@code text} content
     * @param sendClient
     * @param recipientId
     * @throws MessengerApiException
     * @throws MessengerIOException
     */
    public void sendVideoMessage(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendVideoAttachment(recipientId, RESOURCE_URL + "/assets/allofus480.mov");
    }

    /**
     * Method used to send a file attachment message in a chat identified by a {@code recipientId}
     * with the {@code text} content
     * @param sendClient
     * @param recipientId
     * @throws MessengerApiException
     * @throws MessengerIOException
     */
    public void sendFileMessage(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendFileAttachment(recipientId, RESOURCE_URL + "/assets/test.txt");
    }

    /**
     * Method used to send a list of available {@code Position}s in a chat identified by a {@code recipientId}
     * with the {@code text} content
     * @param sendClient
     * @param recipientId
     * @throws MessengerApiException
     * @throws MessengerIOException
     */
    public void sendOpenPositionsMessage(MessengerSendClient sendClient, String recipientId, String baseUrl) throws MessengerApiException, MessengerIOException {
        ListBuilder buttonListBuilder = Button.newListBuilder();
        List<Position> availablePositions = positionService.findAll();
        log.info(availablePositions.size() + " positions found.");
        
        for(Position p: availablePositions) {
        	buttonListBuilder.addUrlButton(p.getName(), p.buildUrl(baseUrl)).toList();
        }
        
        if(availablePositions.isEmpty()) {
        	buttonListBuilder.addUrlButton("Nothing here", "https://www.google.com").toList();
        }
        
        final List<Button> buttons = buttonListBuilder.build();
        final ButtonTemplate buttonTemplate = ButtonTemplate.newBuilder("We have those: ", buttons).build();
        sendClient.sendTemplate(recipientId, buttonTemplate);
    }

    /**
     * Method used to send a quick reply list of buttons in a chat identified by a {@code recipientId}
     * with the {@code text} content
     * @param sendClient
     * @param recipientId
     * @throws MessengerApiException
     * @throws MessengerIOException
     */
    public void sendQuickReply(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        final List<QuickReply> quickReplies = QuickReply.newListBuilder()
                .addTextQuickReply("Action", "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION").toList()
                .addTextQuickReply("Comedy", "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY").toList()
                .addTextQuickReply("Drama", "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DRAMA").toList()
                .addLocationQuickReply().toList()
                .build();

        sendClient.sendTextMessage(recipientId, "What's your favorite movie genre?", quickReplies);
    }

    /**
     * Method used to send a "read" signal in a chat identified by a {@code recipientId}
     * with the {@code text} content
     * @param sendClient
     * @param recipientId
     * @throws MessengerApiException
     * @throws MessengerIOException
     */
    public void sendReadReceipt(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendSenderAction(recipientId, SenderAction.MARK_SEEN);
    }

    /**
     * Method used to send "..." to indicate the bot is "typing" in a chat identified by a {@code recipientId}
     * with the {@code text} content
     * @param sendClient
     * @param recipientId
     * @throws MessengerApiException
     * @throws MessengerIOException
     */
    public void sendTypingOn(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendSenderAction(recipientId, SenderAction.TYPING_ON);
    }

    /**
     * Method used to remove the "..." when the bot has finished "typing" in a chat identified by a {@code recipientId}
     * with the {@code text} content
     * @param sendClient
     * @param recipientId
     * @throws MessengerApiException
     * @throws MessengerIOException
     */
    public void sendTypingOff(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendSenderAction(recipientId, SenderAction.TYPING_OFF);
    }
}
