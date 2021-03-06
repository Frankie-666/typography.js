// @flow
import gray from 'gray-percentage'
import type { OptionsType } from 'Types'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme: OptionsType = {
  baseFontSize: '19px',
  baseLineHeight: '32px',
  googleFonts: [
    {
      name: 'Noto Serif',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Noto Serif', 'serif'],
  bodyFontFamily: ['Noto Serif', 'serif'],
  headerGray: 20,
  bodyGray: 20,
  headerWeight: '700',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, adjustFontSizeToMSValue, rhythm }, options) => ({
    'h5,h6': {
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    // children ol, ul
    'li>ol,li>ul': {
      marginLeft: rhythm(2/3),
      marginBottom: 0,
    },
    // Blockquote.
    blockquote: {
      ...adjustFontSizeToMSValue(1/5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(5/8),
      marginLeft: rhythm(-6/8),
      borderLeft: `${rhythm(1/8)} solid rgba(51, 51, 51, 0.7)`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(options.bodyGray),
      fontStyle: 'normal',
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3/4),
        marginRight: 0,
        paddingLeft: rhythm(9/16),
      },
    },
  }),
}

export default theme
