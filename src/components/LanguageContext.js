import React, { createContext, useState, useMemo, useCallback } from "react";

export const LanguageContext = createContext("English");

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("English");

	const changeLanguage = useCallback((selectedLanguage) => {
		setLanguage(selectedLanguage);
	}, []);

	const contextValue = useMemo(
		() => ({ language, changeLanguage }),
		[language, changeLanguage]
	);

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	);
};
