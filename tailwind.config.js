module.exports = {
  // important: true,
  theme: {
    // https://github.com/benface/tailwindcss-typography
    textStyles: theme => ({
      heading: {
        output: false,
        color: theme('colors.black'),
        fontWeight: theme('fontWeight.bold'),
        lineHeight: theme('lineHeight.tight'),
      },
      h1: {
        extends: 'heading',
        fontSize: theme('fontSize.6xl'),
      },
      h2: {
        extends: 'heading',
        fontSize: theme('fontSize.5xl'),
      },
      h3: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl'),
      },
      link: {
        fontWeight: theme('fontWeight.bold'),
        color: theme('colors.blue.600'),
        '&:hover': {
          color: theme('colors.blue.500'),
          textDecoration: 'underline',
        },
      },
      markdown: {
        backgroundColor: theme('colors.theme.background'),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontWeight: theme('fontWeight.normal'),
        fontSize: '32px',
        color: theme('colors.black'),
        lineHeight: theme('lineHeight.relaxed'),
        '> * + *': {
          marginTop: '1.5rem',
        },
        'h1': {
          extends: 'h1',
        },
        'h2': {
          extends: 'h2',
        },
        'h3': {
          extends: 'h3',
        },
        'ul': {
          paddingLeft: '1.5rem',
          listStyleType: 'disc',
        },
        'ol': {
          paddingLeft: '1.5rem',
          listStyleType: 'decimal',
        },
        'a': {
          extends: 'link',
        },
        'b, strong': {
          fontWeight: theme('fontWeight.bold'),
        },
        'i, em': {
          fontStyle: 'italic',
        },
        'pre[class*=language-]': {
          padding: '1rem',
          fontSize: theme('fontSize.3xl'),
          fontFamily: theme('fontFamily.mono'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.normal'),
          backgroundColor: theme('colors.black'),
          color: theme('colors.blue.400'),
          whitespace: 'nowrap',
          scrollbarWidth: 'none',
        },
        'pre[class*=language-]::-webkit-scrollbar': {
          display: 'none',
        }
      },
    }),
    extend: {
      colors: {
        theme: {
          background: '#fff',
        },
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-typography')({
      componentPrefix: '',
    }),
  ],
}
