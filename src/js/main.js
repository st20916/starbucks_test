import _ from 'lodash';

const searchEl = document.querySelector('.search')
		, searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
	searchInput.focus();
});

searchInput.addEventListener('focus', (e) => {
	searchEl.classList.add('focused');
	e.target.setAttribute('placeholder', '통합 검색');
});

searchInput.addEventListener('blur', (e) => {
	searchEl.classList.remove('focused');
	e.target.setAttribute('placeholder', '');
});