import React from "react";

const TabNavItem = ({
    id,
    title,
    activeTab,
    setActiveTab,
    handleRemoveButton,
    handleSaveButton
}) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <div>
            <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
                {title}
            </li>
            <button
                onClick={() => {
                    handleSaveButton(id);
                }}
            >
                Save
            </button>
            {id !== "initial_visit_tab" ? (
                <button
                    onClick={() => {
                        handleRemoveButton(id);
                    }}
                >
                    Remove
                </button>
            ) : (
                ""
            )}
        </div>
    );
};
export default TabNavItem;
