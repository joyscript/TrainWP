export const addTagsClickHandler = () => {
  const strategiesTags = document.querySelector('.strategies__tags');
  strategiesTags.addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      const clickedTag = e.target;
      normalizeSelectedTag();
      selectClickedTag(clickedTag);

      if (clickedTag.innerText === 'All') {
        showAllStrategies();
      } else {
        filterStrategiesByTag(clickedTag);
      }
    }
  });
};

const normalizeSelectedTag = () => {
  const selectedTag = document.querySelector('.strategies__tags .tag_selected');
  selectedTag.classList.remove('tag_selected');
  selectedTag.classList.add('tag_bordered');
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove('tag_bordered');
  clickedTag.classList.add('tag_selected');
};

const showAllStrategies = () => {
  const strategies = document.querySelectorAll('.strategies__container .strategy');
  strategies.forEach((strategy) => {
    strategy.classList.remove('strategy_hidden');
    normalizeWideStrategy(strategy);
  });
};

const filterStrategiesByTag = (clickedTag) => {
  const strategies = document.querySelectorAll('.strategies__container .strategy');
  strategies.forEach((strategy) => {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.tag').forEach((tag) => {
      if (tag.innerText === clickedTag.innerText) {
        strategy.classList.remove('strategy_hidden');
        replaceWideStrategy(strategy);
      }
    });
  });
};

const replaceWideStrategy = (strategy) => {
  if (window.innerWidth > 1024 && strategy.classList.contains('strategy_wide')) {
    strategy.classList.add('strategy_wide-active');
  }
};

const normalizeWideStrategy = (strategy) => {
  if (strategy.classList.contains('strategy_wide-active')) {
    strategy.classList.remove('strategy_wide-active');
  }
};
