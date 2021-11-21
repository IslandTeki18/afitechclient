import React, { useEffect } from "react";
import "./ServiceDetailsPage.scss";
import { useParams, Link } from "react-router-dom";
import { serviceFeatureInfo, projectList } from "../../utils/testData";
import Icon from "../../components/icon/Icon";
import ProjectListCard from "../../components/projectListCard/ProjectListCard";

const ServiceDetailsPage = () => {
    const params = useParams();
    // Redux Service Details Call
    useEffect(() => {
        window.scrollTo(0, 0, "smooth");
    }, []);

    function serviceFeatureCards() {
        return (
            <div className="row">
                {serviceFeatureInfo.map((item, idx) => (
                    <div className="col-sm-12 col-lg-6 mb-3" key={idx}>
                        <h4 className="me-3">{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        );
    }

    function renderProjectListCards() {
        return projectList
            .filter((project) => project.projectType === params.service)
            .map((item, idx) => (
                <div className="col-sm-6 col-md-4 mb-2" key={idx}>
                    <ProjectListCard
                        title={item.title}
                        image={item.image}
                        projectType={item.projectDisplayType}
                        link={item.link}
                        projectTags={item.projectTags}
                    />
                </div>
            ));
    }
    return (
        <div className="dkServiceDetailsPage">
            <section id="serviceHeaderSection" className="py-5">
                <div className="container text-center py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="display-2">Service Details Title</h1>
                            <p className="text-muted">
                                A short yet descriptive service detail
                                description goes here. This is usually no longer
                                than two, maybe three well worded sentences out.
                                I would like this to cover about 2 / 3rds of the
                                container under the title.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="serviceDetailsCoverPhotoSection" className="pb-5">
                <img
                    src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2698&q=80"
                    alt="service-1"
                    className="img-cover"
                />
            </section>
            <section id="serviceDetailsSection" className="py-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row pb-5">
                                <div className="col-8">
                                    <h3>
                                        When in doubt, use a main thesis
                                        statement of the service right here
                                    </h3>
                                </div>
                            </div>
                            {serviceFeatureCards()}
                        </div>
                    </div>
                </div>
            </section>
            <section id="relatedProjectsSection">
                <div className="container-fluid">
                    <div className="row">{renderProjectListCards()}</div>
                </div>
            </section>
            <section id="pageNavigationSection">
                <div className="container-fluid">
                    <hr />
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <button className="btn btn-link text-reset text-decoration-none d-flex align-items-center">
                            <Icon
                                icon="long-arrow-alt-left"
                                iconStyle="fas"
                                size="28"
                                color="#3c3c3c"
                                marginRight="10"
                            />
                            prev
                        </button>
                        <Link
                            to="/services"
                            className="btn btn-secondary circle-btn"
                        >
                            all
                        </Link>
                        <button className="btn btn-link text-reset text-decoration-none d-flex align-items-center">
                            next
                            <Icon
                                icon="long-arrow-alt-right"
                                iconStyle="fas"
                                size="28"
                                color="#3c3c3c"
                                marginLeft="10"
                            />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailsPage;
