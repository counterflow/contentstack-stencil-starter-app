/* eslint-disable react/react-in-jsx-scope */
import { parse } from '@saasquatch/stencil-html-parser';
import { h } from '@stencil/core';

export default function SectionWithHtmlCode(props) {
  const { embedCode } = props;
  if (embedCode.html_code_alignment === 'Left') {
    return (
      <div class="contact-page-section max-width">
        <div class="contact-page-content">
          {embedCode.title && <h1>{embedCode.title}</h1>}
          {embedCode.description && parse(embedCode.description)}
        </div>
        <div class="contact-page-form">{embedCode.html_code && parse(embedCode.html_code)}</div>
      </div>
    );
  }
  return (
    <div class="contact-maps-section max-width">
      <div class="maps-details">{parse(embedCode.html_code)}</div>
      <div class="contact-maps-content">
        {embedCode.title ? <h2>{embedCode.title}</h2> : ''}
        {embedCode.description && parse(embedCode.description)}
      </div>
    </div>
  );
}
