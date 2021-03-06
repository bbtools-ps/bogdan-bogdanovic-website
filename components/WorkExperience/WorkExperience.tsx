import { Link, Loading } from "@nextui-org/react";
import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WorkExperienceState } from "../../common/models/ReduxSliceState";
import { fetchWorkExperience } from "../../redux/reducers/workExperienceSlice";
import { AppDispatch, RootState } from "../../redux/store";
import JobItem from "./JobItem";

const WorkExperience = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: jobs,
    isLoading: loading,
    error,
  } = useSelector<RootState, WorkExperienceState>(
    (state) => state.workExperience
  );
  const { locale } = useRouter();

  useEffect(() => {
    if (locale) {
      dispatch(fetchWorkExperience(locale));
    }
  }, [dispatch, locale]);

  return (
    <section className="work-experience">
      <div className="content-wrap item-details">
        <h2>{t("home:WorkExperienceTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:WorkExperienceDescription_Label")}
            components={{
              link1: (
                <Link
                  href="https://www.linkedin.com/in/bogdanbogdanovic"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Linkedin"
                  block
                />
              ),
            }}
          />
        </p>
        {/* State: pending */}
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        )}
        {/* State: succeeded */}
        {!loading &&
          !error &&
          jobs?.map((item) => (
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
        {/* State: none */}
        {!loading && !error && !jobs?.length && (
          <p>{t("home:WorkExperienceNone_Label")}</p>
        )}
        {/* State: failed */}
        {error && <p>{t("home:WorkExperienceError_Label")}</p>}
      </div>
    </section>
  );
};

export default WorkExperience;
