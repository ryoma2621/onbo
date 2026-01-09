document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copyBtn');
    const copyTarget = document.getElementById('copyTarget');
    const toast = document.getElementById('toast');

    if (copyBtn && copyTarget) {
        copyBtn.addEventListener('click', async () => {
            const textToCopy = copyTarget.value;

            try {
                // Clipboard APIを使用
                await navigator.clipboard.writeText(textToCopy);
                showToast();
            } catch (err) {
                // フォールバック（古いブラウザ等）
                copyTarget.select();
                document.execCommand('copy');
                showToast();
            }
        });
    }

    function showToast() {
        if (!toast) return;
        
        toast.classList.add('show');
        toast.setAttribute('aria-hidden', 'false');

        // 3秒後に非表示
        setTimeout(() => {
            toast.classList.remove('show');
            toast.setAttribute('aria-hidden', 'true');
        }, 3000);
    }
});
