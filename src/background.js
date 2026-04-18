chrome.webRequest.onCompleted.addListener(
    (details) => {
        chrome.tabs
            .sendMessage(details.tabId, { event: "purge" })
            .catch((err) => {
                if (!err.message.includes("Receiving end does not exist")) {
                    throw err;
                }
            })
    },
    { urls: ["https://gql.twitch.tv/gql"] }
);
