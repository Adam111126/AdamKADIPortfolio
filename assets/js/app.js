(function () {
    // Render the one-page portfolio from the shared data object.
    const data = window.PORTFOLIO_DATA;

    if (!data) {
        return;
    }

    const projectMap = new Map(data.projects.map((project) => [project.id, project]));

    const escapeHtml = (value) => String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const renderBadgeList = (items, className) => {
        if (!items || !items.length) {
            return "";
        }

        return `
            <div class="badge-row">
                ${items.map((item) => `<span class="badge ${className}">${escapeHtml(item)}</span>`).join("")}
            </div>
        `;
    };

    const renderToolList = (items) => {
        if (!items || !items.length) {
            return "";
        }

        return `
            <div class="card-footer-meta">
                ${items.map((item) => `<span class="tool-pill">${escapeHtml(item)}</span>`).join("")}
            </div>
        `;
    };

    const renderMedia = (item, featured = false) => {
        const className = featured ? "featured-visual" : "project-media";

        if (item.image && item.image.src) {
            return `
                <div class="${className} has-image">
                    <img src="${escapeHtml(item.image.src)}" alt="${escapeHtml(item.image.alt || item.title)}">
                </div>
            `;
        }

        return `
            <div class="${className}">
                <div class="placeholder-media">
                    <span class="project-status">Visuel à remplacer</span>
                    <span class="placeholder-title">${escapeHtml(item.placeholder || item.title)}</span>
                    <span class="placeholder-caption">${escapeHtml(item.placeholderCaption || "Capture du projet à ajouter.")}</span>
                </div>
            </div>
        `;
    };

    const renderDetailSection = (title, items) => {
        if (!items || !items.length) {
            return "";
        }

        return `
            <div class="card-subsection">
                <span class="card-subsection-title">${escapeHtml(title)}</span>
                <ul class="highlight-list">
                    ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                </ul>
            </div>
        `;
    };

    const renderProjectCard = (project) => {
        const hasDetails = Boolean(project.details) || Boolean(project.highlights?.length) || Boolean(project.deliverables?.length);

        return `
            <article class="project-card">
                ${renderMedia(project)}
                <header>
                    <div>
                        <div class="card-footer-meta">
                            ${project.type ? `<span class="type-pill">${escapeHtml(project.type)}</span>` : ""}
                            ${project.status ? `<span class="project-status">${escapeHtml(project.status)}</span>` : ""}
                        </div>
                        <h3>${escapeHtml(project.title)}</h3>
                    </div>
                </header>
                <div class="project-summary">
                    ${renderReadMore(project.description)}
                    ${renderBadgeList(project.technologies, "tech")}
                    ${renderToolList(project.tools)}
                    ${renderBadgeList(project.skills, "skill")}
                    ${project.learned ? `<p class="project-meta"><strong>Ce que j'ai appris :</strong> ${escapeHtml(project.learned)}</p>` : ""}
                </div>
                ${hasDetails ? `
                    <details class="project-details">
                        <summary>Voir les détails</summary>
                        <div class="project-details-body">
                            ${project.details ? `<p>${escapeHtml(project.details)}</p>` : ""}
                            ${renderDetailSection("Points à retenir", project.highlights)}
                            ${renderDetailSection("Livrables de gestion", project.deliverables)}
                        </div>
                    </details>
                ` : ""}
                ${project.github ? `<a class="button button-secondary github-link" href="${escapeHtml(project.github)}" target="_blank" rel="noopener">Voir sur GitHub</a>` : ""}
            </article>
        `;
    };

    const renderOverview = () => {
        const container = document.getElementById("competencies-overview");

        if (!container) {
            return;
        }

        container.innerHTML = data.competencies.map((competency) => `
            <a class="competency-overview-card" href="#${escapeHtml(competency.id)}" aria-label="Voir la compétence ${escapeHtml(competency.title)} et ses projets liés">
                <span class="competency-count">${escapeHtml(String(competency.projectIds.length))} projets</span>
                <h3>${escapeHtml(competency.title)}</h3>
                <p>${escapeHtml(competency.summary)}</p>
                <span class="button button-surface overview-link-indicator">Voir la compétence</span>
            </a>
        `).join("");
    };

    const renderReadMore = (text, wordLimit = 30) => {
        const escaped = escapeHtml(text);
        const words = escaped.split(/\s+/);

        if (words.length <= wordLimit) {
            return `<p>${escaped}</p>`;
        }

        const truncated = words.slice(0, wordLimit).join(" ");

        return `
            <p class="read-more-container">
                <span class="read-more-truncated">${truncated}<span class="read-more-ellipsis">… </span><button class="read-more-btn" type="button">Lire la suite</button></span>
                <span class="read-more-full" hidden>${escaped}</span>
            </p>
        `;
    };

    const renderCompetencySections = () => {
        const container = document.getElementById("competency-sections");

        if (!container) {
            return;
        }

        container.innerHTML = data.competencies.map((competency) => {
            const projects = competency.projectIds
                .map((projectId) => projectMap.get(projectId))
                .filter(Boolean);

            return `
                <section class="section competency-section" id="${escapeHtml(competency.id)}" data-nav-section>
                    <div class="container reveal">
                        <div class="section-heading">
                            <p class="section-kicker">Compétence BUT</p>
                            <h2>${escapeHtml(competency.title)}</h2>
                        </div>
                        <div class="competency-layout">
                            <aside class="competency-aside">
                                ${renderReadMore(competency.personalSummary || competency.summary)}
                                <div class="focus-chip-row">
                                    ${competency.focusPoints.map((point) => `<span class="focus-chip">${escapeHtml(point)}</span>`).join("")}
                                </div>
                            </aside>
                            <div class="projects-grid">
                                ${projects.map((project) => renderProjectCard(project)).join("")}
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }).join("");
    };

    const renderTechnicalTimeline = () => {
        const container = document.getElementById("technical-timeline");

        if (!container) {
            return;
        }

        container.innerHTML = data.technicalLabs.map((item) => `
            <article class="timeline-card">
                <div class="card-footer-meta">
                    <span class="project-status">${escapeHtml(item.label)}</span>
                </div>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.description)}</p>
                <div class="badge-row">
                    ${item.tools.map((tool) => `<span class="badge skill">${escapeHtml(tool)}</span>`).join("")}
                </div>
            </article>
        `).join("");
    };

    const renderFeaturedProject = () => {
        const container = document.getElementById("featured-project-card");
        const project = data.featuredProject;

        if (!container || !project) {
            return;
        }

        container.innerHTML = `
            <article class="featured-card">
                ${renderMedia(project, true)}
                <div class="featured-content">
                    <div class="featured-meta">
                        <div>
                            <span class="project-status">${escapeHtml(project.status)}</span>
                            <h3>${escapeHtml(project.title)}</h3>
                        </div>
                    </div>
                    <div class="featured-copy">${renderReadMore(project.summary)}</div>
                    <div class="featured-copy">${renderReadMore(project.details)}</div>
                    <div class="featured-badges">
                        ${project.stack.map((item) => `<span class="badge tech">${escapeHtml(item)}</span>`).join("")}
                    </div>
                    <div class="featured-grid">
                        <section class="featured-panel">
                            <h4>Objectifs produit</h4>
                            <ul class="feature-list">
                                ${project.objectives.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                            </ul>
                        </section>
                        <section class="featured-panel">
                            <h4>Mon rôle</h4>
                            <ul class="feature-list">
                                ${project.role.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                            </ul>
                        </section>
                        <section class="featured-panel">
                            <h4>Outils d'équipe</h4>
                            <div class="featured-highlights">
                                ${project.teamTools.map((item) => `<span class="tool-pill">${escapeHtml(item)}</span>`).join("")}
                            </div>
                        </section>
                        <section class="featured-panel">
                            <h4>Points forts</h4>
                            <div class="featured-highlights">
                                ${project.strengths.map((item) => `<span class="badge skill">${escapeHtml(item)}</span>`).join("")}
                            </div>
                        </section>
                    </div>
                    ${project.github ? `<a class="button button-secondary github-link" href="${escapeHtml(project.github)}" target="_blank" rel="noopener">Voir sur GitHub</a>` : ""}
                </div>
            </article>
        `;
    };

    const renderFinalizingProjects = () => {
        const container = document.getElementById("finalizing-projects");

        if (!container) {
            return;
        }

        container.innerHTML = data.finalizingProjects.map((project) => renderProjectCard(project)).join("");
    };

    const updateCounts = () => {
        document.querySelectorAll("[data-count='projects']").forEach((element) => {
            element.textContent = data.stats.projects;
        });

        document.querySelectorAll("[data-count='competencies']").forEach((element) => {
            element.textContent = data.stats.competencies;
        });
    };

    const updateFooterDate = () => {
        const footerDate = document.getElementById("footer-date");

        if (!footerDate) {
            return;
        }

        const formatter = new Intl.DateTimeFormat("fr-FR", {
            month: "long",
            year: "numeric"
        });

        footerDate.textContent = formatter.format(new Date());
    };

    const initReveal = () => {
        const revealItems = document.querySelectorAll(".reveal");

        if (!revealItems.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
            revealItems.forEach((item) => item.classList.add("is-visible"));
            return;
        }

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -10% 0px"
        });

        revealItems.forEach((item) => revealObserver.observe(item));
    };

    const initNavigation = () => {
        const nav = document.querySelector(".site-nav");
        const toggle = document.querySelector(".nav-toggle");
        const links = Array.from(document.querySelectorAll("[data-nav-link]"));
        const sections = Array.from(document.querySelectorAll("[data-nav-section]"));
        const navGroups = Array.from(document.querySelectorAll("[data-nav-group]"))
            .map((groupElement) => {
                const parentLink = groupElement.querySelector("[data-nav-parent-link]");
                const subLinks = Array.from(groupElement.querySelectorAll("[data-nav-sub-link]"));
                const toggleButton = groupElement.querySelector("[data-dropdown-toggle]");
                const sectionIds = new Set(
                    [parentLink, ...subLinks]
                        .filter(Boolean)
                        .map((link) => (link.getAttribute("href") || "").replace("#", ""))
                        .filter(Boolean)
                );

                return {
                    groupElement,
                    parentLink,
                    subLinks,
                    toggleButton,
                    sectionIds
                };
            });

        if (!nav || !toggle || !links.length || !sections.length) {
            return;
        }

        const setMenuState = (isOpen) => {
            nav.classList.toggle("is-open", isOpen);
            toggle.setAttribute("aria-expanded", String(isOpen));
        };

        const setDropdownState = (groupElement, isOpen) => {
            groupElement.classList.toggle("is-open", isOpen);

            const button = groupElement.querySelector("[data-dropdown-toggle]");

            if (button) {
                button.setAttribute("aria-expanded", String(isOpen));
            }
        };

        const closeDropdowns = () => {
            navGroups.forEach((group) => setDropdownState(group.groupElement, false));
        };

        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.contains("is-open");

            if (isOpen) {
                closeDropdowns();
            }

            setMenuState(!isOpen);
        });

        links.forEach((link) => {
            link.addEventListener("click", () => {
                closeDropdowns();
                setMenuState(false);
            });
        });

        navGroups.forEach((group) => {
            if (!group.toggleButton) {
                return;
            }

            group.toggleButton.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();

                const isOpen = group.groupElement.classList.contains("is-open");
                closeDropdowns();
                setDropdownState(group.groupElement, !isOpen);
            });
        });

        document.addEventListener("click", (event) => {
            if (nav.contains(event.target)) {
                return;
            }

            closeDropdowns();

            if (nav.classList.contains("is-open")) {
                setMenuState(false);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeDropdowns();
                setMenuState(false);
            }
        });

        const updateActiveLink = () => {
            const offset = window.scrollY + nav.offsetHeight + 140;
            let currentId = sections[0].id;

            sections.forEach((section) => {
                if (section.offsetTop <= offset) {
                    currentId = section.id;
                }
            });

            links.forEach((link) => {
                const href = link.getAttribute("href");
                const isActive = href === `#${currentId}`;

                link.classList.toggle("is-active", isActive);

                if (isActive) {
                    link.setAttribute("aria-current", "page");
                } else {
                    link.removeAttribute("aria-current");
                }
            });

            navGroups.forEach((group) => {
                const groupIsActive = group.sectionIds.has(currentId);

                group.groupElement.classList.toggle("is-active", groupIsActive);

                if (group.parentLink) {
                    group.parentLink.classList.toggle("is-active", groupIsActive);

                    if (group.parentLink.getAttribute("href") !== `#${currentId}`) {
                        group.parentLink.removeAttribute("aria-current");
                    }
                }
            });
        };

        updateActiveLink();
        window.addEventListener("scroll", updateActiveLink, { passive: true });
        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) {
                closeDropdowns();
                setMenuState(false);
            }

            updateActiveLink();
        });
    };

    const initReadMore = () => {
        document.addEventListener("click", (event) => {
            const btn = event.target.closest(".read-more-btn");
            if (!btn) return;

            const container = btn.closest(".read-more-container");
            if (!container) return;

            container.querySelector(".read-more-truncated").hidden = true;
            container.querySelector(".read-more-full").hidden = false;
        });
    };

    const init = () => {
        renderOverview();
        renderCompetencySections();
        renderTechnicalTimeline();
        renderFeaturedProject();
        renderFinalizingProjects();
        updateCounts();
        updateFooterDate();
        initReveal();
        initNavigation();
        initReadMore();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
