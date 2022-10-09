import React from "react";

const TabNavItem = ({
    id,
    title,
    activeTab,
    setActiveTab,
    handleRemove,
}) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <div>
            <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
                {title}
            </li>
            {id !== "initial_visit_tab" ? (
                <button
                    onClick={() => {
                        handleRemove(id);
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
