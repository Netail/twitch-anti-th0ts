chrome.webRequest.onCompleted.addListener(
    (details) => {
        try {
            chrome.tabs.sendMessage(details.tabId, { type: "purge" });
        } catch (err) {
            // ignore for now
        }
    },
    { urls: ["https://gql.twitch.tv/gql"] }
);