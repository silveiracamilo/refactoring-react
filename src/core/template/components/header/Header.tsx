import LanguageDropdown from "shared/components/languageDropdown/LanguageDropdown";

const HeaderContent: React.FC = () => {
    return (
        <div className="flex justify-between">
            <div>React - Design Patterns and Solid</div>
            <LanguageDropdown />
        </div>
    );
}

export default HeaderContent;
