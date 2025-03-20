import React from 'react';

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="about-section">
            {/* You can add About-specific UI elements here */}
            <div className="about-container">
                {children}
            </div>
        </section>
    );
}