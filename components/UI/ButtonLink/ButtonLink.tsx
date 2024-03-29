import { faCode, faEye, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import styles from "./ButtonLink.module.scss";

interface IProps {
  url: string;
  icon?: "info" | "source" | "live";
  children: React.ReactNode;
}

export default function ButtonLink({ url, icon, children }: IProps) {
  const buttonIcon = {
    source: faCode,
    live: faEye,
    info: faInfoCircle
  };

  return (
    <Button
      className={styles.button}
      ghost
      auto
      as={Link}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && buttonIcon[icon] && (
        <FontAwesomeIcon icon={buttonIcon[icon]} data-testid={`${icon}-icon`} />
      )}
      {children}
    </Button>
  );
}
