import EmailLink from "@/components/UI/EmailLink/EmailLink";
import ExternalLink from "@/components/UI/ExternalLink/ExternalLink";
import SocialLink from "@/components/UI/SocialLink/SocialLink";
import { Trans, useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="content-wrap">
        <h2>{t("common:FooterTitle_Label")}</h2>
        <EmailLink email="bogdi.mail@gmail.com" withIcon>
          bogdi.mail@gmail.com
        </EmailLink>
        <ul>
          <li>
            <SocialLink icon="github" href="https://github.com/bbtools-ps/">
              Github
            </SocialLink>
          </li>
          <li>
            <SocialLink icon="behance" href="https://www.behance.net/bogdanbogdanovic">
              Behance
            </SocialLink>
          </li>
          <li>
            <SocialLink icon="linkedin" href="https://www.linkedin.com/in/bogdanbogdanovic">
              Linkedin
            </SocialLink>
          </li>
          <li>
            <SocialLink icon="youtube" href="https://www.youtube.com/user/bogdimail">
              Youtube
            </SocialLink>
          </li>
        </ul>
        <p>{t("common:FooterDescription1_Label")}</p>
        <p>
          <Trans
            i18nKey={t("common:FooterDescription2_Label")}
            components={{
              link1: <ExternalLink href="https://github.com/bbtools-ps/bogdan-bogdanovic-website" />
            }}
          />
        </p>
      </div>
    </footer>
  );
}
