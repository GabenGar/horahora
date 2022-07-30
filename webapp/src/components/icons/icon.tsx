import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

/**
 * An ID of the icon to be used by other components.
 */
export interface IIconID extends IconDefinition {}

export interface IIconProps extends FontAwesomeIconProps {}

export function Icon({ ...blockProps }: IIconProps) {
  return (
    <FontAwesomeIcon
      {...blockProps}
      className="max-h-5 text-black dark:text-white"
    />
  );
}
