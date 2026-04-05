import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { IPTV_STORE_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-box">
          <div className="cta-text">
            <h2>7-days money-back guarantee</h2>
            <p>
              Try it risk-free—if you are not satisfied within the first week, contact us for a hassle-free
              refund. No tricks, no runaround.
            </p>
          </div>
          <Link href={IPTV_STORE_URL} className="cta-btn shrink-0">
            <span className="cta-btn-inner">Get Started</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
