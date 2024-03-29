import SectionContent from "@/layout/Section/SectionContent";
import { ILanguageData } from "@/models";
import { useTranslation } from "next-i18next";

interface IProps {
  data: ILanguageData["documents"];
}

export default function Languages({ data: languages }: IProps) {
  const { t } = useTranslation();

  return (
    <section className="languages">
      <div className="content-wrap item-details">
        <h2>{t("home:LanguagesTitle_Label")}</h2>
        <SectionContent data={languages} noResultsMessage={t("home:EducationNone_Label")}>
          <ul>
            {languages?.map((item) => (
              <li key={item.name}>
                {item.fields.language.stringValue} ({item.fields.level.stringValue})
              </li>
            ))}
          </ul>
        </SectionContent>
      </div>
    </section>
  );
}
