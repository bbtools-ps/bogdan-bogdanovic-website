import { Link, Loading } from "@nextui-org/react";
import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EducationState } from "../../common/models/ReduxSliceState";
import { fetchEducation } from "../../redux/reducers/educationSlice";
import { AppDispatch, RootState } from "../../redux/store";
import EducationItem from "./EducationItem";

const Education = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: education,
    isLoading: loading,
    error,
  } = useSelector<RootState, EducationState>((state) => state.education);
  const { locale } = useRouter();

  useEffect(() => {
    if (locale) {
      dispatch(fetchEducation(locale));
    }
  }, [dispatch, locale]);

  return (
    <section className="education">
      <div className="content-wrap item-details">
        <h2>{t("home:EducationTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:EducationDescription_Label")}
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
          education?.map((item) => (
            <EducationItem
              key={item.name}
              certificate={item.fields.certificate.stringValue}
              institution={item.fields.institution.stringValue}
              location={item.fields.location.stringValue}
            />
          ))}
        {/* State: none */}
        {!loading && !error && !education?.length && (
          <p>{t("home:EducationNone_Label")}</p>
        )}
        {/* State: failed */}
        {error && <p>{t("home:EducationError_Label")}</p>}
      </div>
    </section>
  );
};

export default Education;
