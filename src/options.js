const handleOnSubmit = (e) => {
    e.preventDefault();

    const isDebugMode = document.getElementById('debug-mode').checked;
    const isUsersDisabled = document.getElementById('disable-users').checked;
    const isKeywordsDisabled = document.getElementById('disable-keywords').checked;

    chrome.storage.sync.set(
        { isDebugMode, isUsersDisabled, isKeywordsDisabled },
        () => {
            const status = document.getElementById('status');
            status.textContent = 'Settings saved.';
            status.hidden = false;
            setTimeout(() => {
                status.hidden = true;
                status.textContent = '';
            }, 1000);
        }
    );
}

const handleOnLoad = () => {
    document.getElementById('settings').addEventListener("submit", handleOnSubmit);

    chrome.storage.sync.get(
        { isDebugMode: false, isUsersDisabled: false, isKeywordsDisabled: false },
        (items) => {
            document.getElementById('debug-mode').checked = items.isDebugMode;
            document.getElementById('disable-users').checked = items.isUsersDisabled;
            document.getElementById('disable-keywords').checked = items.isKeywordsDisabled;
        }
    );
};

document.addEventListener('DOMContentLoaded', handleOnLoad);
