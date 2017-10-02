//package com.github.popescuandrei.recruitingBot.ai;
//
//import javax.annotation.PostConstruct;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.stereotype.Component;
//
//import ai.api.AIConfiguration;
//import ai.api.AIDataService;
//import ai.api.model.AIRequest;
//import ai.api.model.AIResponse;
//
//@Component
//@PropertySource("classpath:properties/apiai.properties")
//public class AiManager {
//
//	private static final Logger LOGGER = LoggerFactory.getLogger(AiManager.class);
//
//	@Value("${api.ai.apikey}")
//	private String apiKey;
//
//	AIConfiguration config;
//	AIDataService dataService;
//
//	@PostConstruct
//	public void init() {
//		config = new AIConfiguration(apiKey);
//		dataService = new AIDataService(config);
//	}
//
//	/**
//	 * Calls the API.AI service using user input from the UI.
//	 */
//	public String sendRequest(String statement) {
//		String responseText = "Hmm, I need to think on that. Ask again later.";
//
//		try {
//			AIRequest request = new AIRequest(statement);
//			AIResponse response = dataService.request(request);
//
//			if (response.getStatus().getCode() == 200) {
//				responseText = response.getResult().getFulfillment().getSpeech();
//			}
//		} catch (Exception e) {
//			LOGGER.error(e.getMessage());
//		}
//
//		return responseText;
//	}
//
//	// /**
//	// * Retrieves custom fulfillment responses from a CSV source.
//	// */
//	// public Map<String, String> getResponses(String intentName) {
//	// String csvFileName = "/properties/ai/" + intentName + "/responses.csv";
//	// List<KeyValuePair> keyValues = csvManager.getCSVAsListOfPOJOs(KeyValuePair.class, csvFileName, "key", "value");
//	// keyValues = resolvePlaceholders(keyValues);
//	//
//	// return keyValues.stream().collect(Collectors.toMap(x -> x.getKey(), x -> x.getValue()));
//	//
//	// }
//	//
//	// /**
//	// * Define placeholders in /properties/placeholders.csv
//	// * Then use this method to replace {{placeholder}} with that placeholder's value.
//	// */
//	// private List<KeyValuePair> resolvePlaceholders(List<KeyValuePair> keyValues) {
//	// List<KeyValuePair> newKeyValues = new ArrayList<KeyValuePair>();
//	//
//	//
//	// Map<String, String> placeholdersMap = csvManager.getKeyValuePairsFromCSVAsMap("/properties/ai/placeholders.csv");
//	//
//	// String pattern = "\\{\\{(.*)\\}\\}";
//	// Pattern r = Pattern.compile(pattern);
//	// for (KeyValuePair kvPair : keyValues) {
//	// Matcher m = r.matcher(kvPair.getValue());
//	// if (m.find()) {
//	// String placeholder = m.group(1);
//	// if (placeholdersMap.containsKey(placeholder)) {
//	// String actualValue = placeholdersMap.get(placeholder);
//	// newKeyValues.add(new KeyValuePair(kvPair.getKey(), kvPair.getValue().replace(m.group(0), actualValue)));
//	// }
//	// } else {
//	// newKeyValues.add(kvPair);
//	// }
//	// }
//	//
//	// return newKeyValues;
//	// }
//}