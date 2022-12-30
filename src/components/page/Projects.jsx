/**
 * List down all project with status and proper details.
 */
import React from "react";
import DownloadButton from '../core/Butttons/DownloadButton'
import { downloadPDF } from '../../api'
import '../../styles/page/Projects.scss'
import '../../styles/common/common.scss'

function Projects() {
  return <div id="Projects">
    <div className="project-container">
      <h1 className="page-title">Projects</h1>
      <span className="p-button"><DownloadButton name="Download" action={() => downloadPDF('SamplePDF1')} /></span>
      <div className="project-content">
        iehenderit. Sapiente optio accusantium unde ipsam impedit, alias magnam eius sint necessitatibus dolores quia temporibus magni similique quisquam exercitationem quis vero qui error dolor?
        Sunt ea, optio vero pariatur fuga harum dignissimos unde deserunt ipsam quos sit nisi, dicta animi architecto distinctio consequuntur quia? Omnis alias eum nesciunt mollitia molestiae. Ipsam optio fugit vitae?
        In eum eveniet vitae debitis pariatur molestias! Eligendi minus quod fuga eaque? Nihil, possimus numquam deserunt voluptatum explicabo adipisci illo nam veniam obcaecati est fugiat commodi ratione, provident quisquam sapiente.
        soluta ad officiis neque consectetur natus quae.
        Nesciunt reprehenderit consequatur iusto ut omnis sint, obcaecati odit sit suscipit nemo inventore natus temporibus voluptatibus ullam fugiat officiis quod beatae hic facilis aut cum quos delectus saepe! Id, ipsam.
      </div>
    </div>

  </div>;
}

export default Projects;
