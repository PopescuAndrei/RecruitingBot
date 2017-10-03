package com.github.popescuandrei.recruitingBot.util;

import java.util.List;

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

    @Autowired
    private PositionService positionService;
    
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
    
    public void sendImageMessage(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendImageAttachment(recipientId, RESOURCE_URL + "/assets/rift.png");
    }
    
    public void sendGifMessage(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendImageAttachment(recipientId, "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif");
    }
    
    public void sendVideoMessage(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendVideoAttachment(recipientId, RESOURCE_URL + "/assets/allofus480.mov");
    }

    public void sendFileMessage(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendFileAttachment(recipientId, RESOURCE_URL + "/assets/test.txt");
    }

    public void sendButtonMessage(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        ListBuilder buttonListBuilder = Button.newListBuilder();
        List<Position> availablePositions = positionService.findAll();
        for(Position p: availablePositions) {
        	buttonListBuilder.addUrlButton(p.getName(), p.buildUrl());
        }
        
        final List<Button> buttons = buttonListBuilder.build();
        final ButtonTemplate buttonTemplate = ButtonTemplate.newBuilder("These are the available positions", buttons).build();
        sendClient.sendTemplate(recipientId, buttonTemplate);
    }

    public void sendQuickReply(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        final List<QuickReply> quickReplies = QuickReply.newListBuilder()
                .addTextQuickReply("Action", "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION").toList()
                .addTextQuickReply("Comedy", "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY").toList()
                .addTextQuickReply("Drama", "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DRAMA").toList()
                .addLocationQuickReply().toList()
                .build();

        sendClient.sendTextMessage(recipientId, "What's your favorite movie genre?", quickReplies);
    }

    public void sendReadReceipt(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendSenderAction(recipientId, SenderAction.MARK_SEEN);
    }

    public void sendTypingOn(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendSenderAction(recipientId, SenderAction.TYPING_ON);
    }

    public void sendTypingOff(MessengerSendClient sendClient, String recipientId) throws MessengerApiException, MessengerIOException {
        sendClient.sendSenderAction(recipientId, SenderAction.TYPING_OFF);
    }
}
