function reverseSentence(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const result = str1 + str1;
    return result.includes(str2);
}

console.log(reverseSentence("JavaJ2eeStrutsHibernate", "StrutsHibernateJavaJ2ee"));
