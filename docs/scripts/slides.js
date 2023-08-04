import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md', '00-school/01-speaker-nathan.md', '00-school/02-speaker-sylvain.md'
  ];
}

function introSlides() {
  return ['01-introduction/00-TITLE.md', '01-introduction/01-plan.md', '01-introduction/02-prerequis.md'];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
