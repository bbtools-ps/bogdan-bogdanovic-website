interface IProps {
  location: string;
  institution: string;
  certificate: string;
}

export default function EducationItem({ location, institution, certificate }: IProps) {
  return (
    <section>
      <h3>
        {institution}, {location}
      </h3>
      <p>{certificate}</p>
    </section>
  );
}
