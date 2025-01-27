// components/Title.js
import PropTypes from "prop-types";

const Title = ({ as: Tag = "h1", className = "", children }) => {
  return <Tag className={`font-bold ${className}`}>{children}</Tag>;
};

Title.propTypes = {
  as: PropTypes.string, // The HTML tag to use (e.g., 'h1', 'h2')
  className: PropTypes.string, // Additional classes for styling
  children: PropTypes.node.isRequired, // Content inside the title
};

export default Title;
