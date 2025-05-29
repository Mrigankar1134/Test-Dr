import React from 'react';

export default function CTAButton({
  text,
  Icon,
  as: Tag = 'button',
  onClick,
  bgColor,
  hoverColor,
  circleColor,
  textColor = '#fff',
  className = '',
  ...props
}) {
  const style = {
    '--btn-bg': bgColor,
    '--btn-hover': hoverColor,
    '--circle-bg': circleColor,
    '--chevron-color': textColor,
    ...props.style,
  };

  return (
    <Tag
      onClick={onClick}
      className={`cta-button ${className}`.trim()}
      style={style}
      {...props}
    >
      <span className="cta-button__text">{text}</span>
      <span className="cta-button__circle">
        {Icon && <Icon className="w-7 h-7 text-[var(--chevron-color)]" />}
      </span>
    </Tag>
  );
}
