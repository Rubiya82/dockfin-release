// 최신 배포 정보 표시 (서명 검증은 프로그램이 수행하며, 페이지는 안내만 한다)
(() => {
  'use strict';
  const set = (id, text, href) => {
    const info = document.getElementById(id + '-info'), link = document.getElementById(id + '-link');
    info.textContent = text;
    if (href) { link.href = href; link.textContent = '다운로드'; }
  };
  const mb = (bytes) => (bytes / 1048576).toFixed(1) + ' MB';
  const load = (path, id, label) => fetch(path, {cache: 'no-store'})
    .then((r) => r.ok ? r.json() : Promise.reject(r.status))
    .then((m) => {
      if (!/^\d+\.\d+\.\d+$/.test(m.version || '') || m.published === false) throw new Error('invalid');
      const notes = m.releaseNotes && m.releaseNotes.ko ? ' · ' + m.releaseNotes.ko : '';
      set(id, `${label} ${m.version} · ${mb(m.sizeBytes)}${notes}`, m.downloadUrl);
    })
    .catch(() => set(id, '아직 공개된 버전이 없습니다. 릴리스 페이지를 확인하세요.'));
  load('version.json', 'win', 'DockFin');
  load('android/version.json', 'android', 'DockFin Android');
})();
