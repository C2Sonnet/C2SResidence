const version = document.querySelector('#version');
const status = document.querySelector('#status');
async function init() {
  try {
    const response = await fetch('./data/project.json', {cache:'no-store'});
    if (!response.ok) return;
    const data = await response.json();
    if (data.version && version) version.textContent = data.version;
    if (status) status.textContent = data.model_status === 'under_verification' ? '建築モデル 検証中' : 'モデルの準備状況を確認中';
  } catch { /* Keep the static page available without data access. */ }
}
init();
