import React from "react";
import "./ProjectListCard.scss";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectListCard = (props) => {
    return (
        <div className="dkProjectListCard m-3">
            <img src={props.image} alt={props.altImage} className="img-fluid" />
            <div className="card-overlay text-white">
                <h3>{props.title}</h3>
                <h6>{props.projectType}</h6>
                <Link className="btn btn-secondary" to={props.link}>
                    <Icon isSolid icon="plus" color="#ffffff" size="20" />
                </Link>
            </div>
        </div>
    );
};

ProjectListCard.propTypes = {
    title: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    projectType: PropTypes.string,
    link: PropTypes.string,
};

export default ProjectListCard;
