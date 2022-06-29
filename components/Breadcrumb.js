import React from "react";

const links = [
  { href: "/", label: "Home", step: 1 },
  { href: "/clothes-condition", label: "Clothes condition", step: 2 },
  { href: "/mend-options", label: "Mend options", step: 2 },
  { href: "/donate", label: "Donate", step: 3 },
  { href: "/recycle", label: "Recycle", step: 3 },
  { href: "/diy", label: "DIY", step: 3 },
  { href: "/tailors", label: "Tailors", step: 3 },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Breadcrumb = ({ page, currentStep }) => (
  <nav>
    <ul>
      <li></li>
      {links
        .filter(
          ({ key, label, step }) =>
            step < currentStep || (step === currentStep && page === label)
        )
        .map(({ key, href, label }) => {
          if (page === label) {
            return (
              <li key={key}>
                <span>{label}</span>
              </li>
            );
          } else {
            return (
              <li key={key}>
                <a href={href}>{label}</a>
              </li>
            );
          }
        })}
    </ul>
  </nav>
);

export default Breadcrumb;
