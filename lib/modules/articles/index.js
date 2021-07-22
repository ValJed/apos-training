module.exports = {
  extend: 'apostrophe-pieces',
  name: 'article',
  label: 'Article',
  contextual: true,
  addFields: [
    {
      name: 'image',
      label: 'Image',
      type: 'singleton',
      widgetType: 'apostrophe-images'
    },
    {
      name: 'content',
      label: 'Content',
      type: 'singleton',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar: [ 'Styles', 'Bold', 'Italic' ],
        styles: [
          { name: 'Paragraph', element: 'p' },
          { name: 'Section heading', element: 'h2' },
          { name: 'Sub-section heading', element: 'h3' }
        ],
      }
    },
  ]
};