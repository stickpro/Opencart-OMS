module.exports = {
  plugins: {
    "postcss-import": {},
    /* Изменяет url в CSS, чтобы всё корректно собиралось. */
    "postcss-url": {},
    /* Нормализация базовых стилей. Особенность этого плагина в зависимости от Browserslist. */
    "postcss-normalize": {},
    /* Позволяет использовать вложенные селекторы, как в SCSS. */
    "postcss-nested": {},
    /* Добавляет сокращение для clearfix в формате clear: fix; */
    "postcss-clearfix": {},
    /* Автоматически конвертирует px в rem, чтобы была возможность указывать величины в пикселях согласно макету и не париться :) */
    "postcss-pxtorem": {},
    /* Аналог babel-preset-env, только для PostCSS: позволяет использовать возможности нового стандарта: https://preset-env.cssdb.org/ */
    "postcss-preset-env": {
      /* Стейджи отключены, так что нужные возможности указываются напрямую, чтобы не тянуть лишний функционал, о котором никто не знает. */
      stage: false,
      features: {
        /* Возможность использовать диапазоны в медиазапросах. */
        "media-query-ranges": true,
        /* Позволяет использовать множественные селекторы внутри псевдокласса :not() */
        "not-pseudo-class": true,
        /* Позволяет использовать overflow-wrap вместо word-wrap, что считается более корректным. */
        "overflow-wrap-property": true,
      },
      /* В postcss-preset-env встроен autoprefixer, но его актуальность не гарантируется. Мы хотим использовать последнюю версию, которую подключаем отдельно, так что эту отключаем, чтобы она не перекрывала нашу. */
      autoprefixer: false,
    },
    "postcss-inline-svg": {
      paths: ["assets/images/sprites", "`assets/images/icons"],
    },
    autoprefixer: {
      grid: "autoplace",
    },
  },
};
