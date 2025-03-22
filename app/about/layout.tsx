import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="about-section">
      <div className="about-container">{children}</div>
    </section>
  );
}
