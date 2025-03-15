// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><a href="generated_courses/transcription/transcription_guide.html">Guide to Learning Music by Ear</a></li><li class="chapter-item expanded "><a href="quick_start.html"><strong aria-hidden="true">1.</strong> Quick Start</a></li><li class="chapter-item expanded "><a href="concepts.html"><strong aria-hidden="true">2.</strong> Concepts and Theory</a></li><li class="chapter-item expanded "><a href="vision.html"><strong aria-hidden="true">3.</strong> Vision</a></li><li class="chapter-item expanded "><a href="using_trane.html"><strong aria-hidden="true">4.</strong> Using Trane</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="trane.html"><strong aria-hidden="true">4.1.</strong> trane</a></li><li class="chapter-item expanded "><a href="trane-cli.html"><strong aria-hidden="true">4.2.</strong> trane-cli</a></li><li class="chapter-item expanded "><a href="trane-app.html"><strong aria-hidden="true">4.3.</strong> trane-app</a></li><li class="chapter-item expanded "><a href="trane-server.html"><strong aria-hidden="true">4.4.</strong> trane-server</a></li></ol></li><li class="chapter-item expanded "><a href="user_preferences.html"><strong aria-hidden="true">5.</strong> User Preferences</a></li><li class="chapter-item expanded "><a href="saved_filters.html"><strong aria-hidden="true">6.</strong> Saved Filters</a></li><li class="chapter-item expanded "><a href="official_courses.html"><strong aria-hidden="true">7.</strong> Official Trane Courses</a></li><li class="chapter-item expanded "><a href="writing_courses.html"><strong aria-hidden="true">8.</strong> Writing Trane Courses</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="generated_courses.html"><strong aria-hidden="true">8.1.</strong> Generated Courses</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="generated_courses/knowledge_base.html"><strong aria-hidden="true">8.1.1.</strong> Knowledge Base Course Generator</a></li><li class="chapter-item expanded "><a href="generated_courses/music_piece.html"><strong aria-hidden="true">8.1.2.</strong> Music Piece Course Generator</a></li><li class="chapter-item expanded "><a href="generated_courses/transcription.html"><strong aria-hidden="true">8.1.3.</strong> Transcription Course Generator</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="generated_courses/transcription/course_instructions.html"><strong aria-hidden="true">8.1.3.1.</strong> Transcription Course Instructions</a></li></ol></li></ol></li></ol></li><li class="chapter-item expanded "><a href="licensing.html"><strong aria-hidden="true">9.</strong> Licensing</a></li><li class="chapter-item expanded "><a href="contributing.html"><strong aria-hidden="true">10.</strong> Contributing to Trane</a></li><li class="chapter-item expanded "><a href="faq.html"><strong aria-hidden="true">11.</strong> FAQ</a></li><li class="chapter-item expanded "><a href="blog.html"><strong aria-hidden="true">12.</strong> Development Blog</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blog/semi_literate_programming.html"><strong aria-hidden="true">12.1.</strong> Semi-Literate Programming</a></li><li class="chapter-item expanded "><a href="blog/100_code_coverage.html"><strong aria-hidden="true">12.2.</strong> Reaching 100% Code Coverage in Rust</a></li></ol></li><li class="chapter-item expanded "><a href="a_love_supreme.html">A Love Supreme</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
