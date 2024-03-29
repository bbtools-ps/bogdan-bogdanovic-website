import SectionContent from "@/layout/Section/SectionContent";
import { IWorkExperienceData } from "@/models";
import { Trans, useTranslation } from "next-i18next";
import ExternalLink from "../UI/ExternalLink/ExternalLink";
import JobItem from "./JobItem";

interface IProps {
  data: IWorkExperienceData["documents"];
}

export default function WorkExperience({ data: jobs }: IProps) {
  const { t } = useTranslation();

  return (
    <section className="work-experience">
      <div className="content-wrap item-details">
        <h2>{t("home:WorkExperienceTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:WorkExperienceDescription_Label")}
            components={{
              link1: (
                <ExternalLink href="https://www.linkedin.com/in/bogdanbogdanovic">
                  Linkedin
                </ExternalLink>
              )
            }}
          />
        </p>
        <SectionContent data={jobs} noResultsMessage={t("home:WorkExperienceNone_Label")}>
          {jobs?.map((item) => (
            <JobItem
              key={item.name}
              companyName={item.fields.companyName.stringValue}
              companyLink={item.fields.companyLink?.stringValue}
              description={item.fields.description.arrayValue.values}
              jobTitle={item.fields.jobTitle.stringValue}
              startDate={item.fields.startDate.timestampValue}
              endDate={item.fields.endDate?.timestampValue}
            />
          ))}
        </SectionContent>
      </div>
    </section>
  );
}
