import * as React from "react";
import { Hero } from "../../Hero";
import { Section } from "../../Section";

import "./styles.css";

export function HomePage() {
    return <div className="page">
        <Hero />
        <div className="reveal-panel"></div>
        <Section>
            
        </Section>
    </div>;
}
