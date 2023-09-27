import './SkillList.css';
import SkillCard from "./skill-card/SkillCard";

const SkillList = () => {

    const languages = ['Java','TypeScript','JavaScript','Clojure'];
    const databases = ['MongoDB','MySQL'];
    const frameworks = ['Springboot','Angular','ReactJS'];
    const othersList = ['HTML','CSS','REST'];
    const testingFrameworks = ['JUnit 5','ArchUnit','Jest'];
    const tools = ['Kafka','Postman','Git','Openshift','Jenkins', 'Docker','IntelliJ','VSCode'];

    return (
        <div className='skill-list'>
            <SkillCard skillsetDescription='Languages' skillsList={languages}/>
            <SkillCard skillsetDescription='Databases' skillsList={databases}/>
            <SkillCard skillsetDescription='Frameworks' skillsList={frameworks}/>
            <SkillCard skillsetDescription='Testing Frameworks' skillsList={testingFrameworks}/>
            <SkillCard skillsetDescription='Tools' skillsList={tools}/>
            <SkillCard skillsetDescription='Other' skillsList={othersList}/>
        </div>
    )
}

export default SkillList;
