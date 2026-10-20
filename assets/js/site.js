(() => {
  'use strict';

  const search = document.querySelector('#writing-search');
  const tools = document.querySelector('.archive-tools');
  if (search && tools) {
    const buttons = Array.from(tools.querySelectorAll('[data-filter]'));
    const years = Array.from(document.querySelectorAll('.archive-year'));
    const entries = Array.from(document.querySelectorAll('#writing-results .post-entry'));
    const status = document.querySelector('#search-status');
    const empty = document.querySelector('#no-results');
    const allowedTopics = new Set(buttons.map(button => button.dataset.filter));
    let topic = 'all';
    const normalize = value => value.normalize('NFKC').toLocaleLowerCase().trim();
    const applyFilters = (updateUrl = true) => {
      const query = normalize(search.value);
      const terms = query.split(/\s+/).filter(Boolean);
      let count = 0;
      entries.forEach(entry => {
        const text = normalize(entry.dataset.search || '');
        const matches = (topic === 'all' || entry.dataset.topic === topic) && terms.every(term => text.includes(term));
        entry.hidden = !matches;
        if (matches) count += 1;
      });
      years.forEach(year => {
        const visibleCount = year.querySelectorAll('.post-entry:not([hidden])').length;
        year.hidden = visibleCount === 0;
        const yearCount = year.querySelector('h2 span');
        if (yearCount) yearCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'entry' : 'entries'}`;
      });
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === topic)));
      status.textContent = `${count} ${count === 1 ? 'entry' : 'entries'}${query || topic !== 'all' ? ' found' : ' in the notebook'}`;
      empty.hidden = count !== 0;
      if (updateUrl) {
        const url = new URL(window.location.href);
        if (search.value.trim()) url.searchParams.set('q', search.value.trim());
        else url.searchParams.delete('q');
        if (topic !== 'all') url.searchParams.set('topic', topic);
        else url.searchParams.delete('topic');
        window.history.replaceState(null, '', url.pathname + url.search + url.hash);
      }
    };
    const readUrl = () => {
      const params = new URLSearchParams(window.location.search);
      search.value = params.get('q') || '';
      topic = allowedTopics.has(params.get('topic')) ? params.get('topic') : 'all';
      applyFilters(false);
    };
    buttons.forEach(button => button.addEventListener('click', () => {
      topic = button.dataset.filter;
      applyFilters();
    }));
    search.addEventListener('input', () => applyFilters());
    window.addEventListener('popstate', readUrl);
    readUrl();
    tools.classList.add('is-ready');
  }

  const outline = document.querySelector('.article-outline');
  const headings = Array.from(document.querySelectorAll('.prose > h2[id]'));
  if (outline && headings.length >= 3) {
    const list = outline.querySelector('ol');
    headings.forEach(heading => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#' + encodeURIComponent(heading.id);
      link.textContent = heading.textContent;
      item.appendChild(link);
      list.appendChild(item);
    });
    outline.hidden = false;
  }
})();
