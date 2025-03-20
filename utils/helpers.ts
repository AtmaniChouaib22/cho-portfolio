const getColorClasses = (color) => {
  const colorMap = {
    blue: {
      bg: "bg-blue-500/20",
      text: "text-blue-500",
    },
    green: {
      bg: "bg-green-500/50",
      text: "text-green-500",
    },
    orange: {
      bg: "bg-orange-500/50",
      text: "text-orange-500",
    },
    red: {
      bg: "bg-red-500/50",
      text: "text-red-500",
    },
    gray: {
      bg: "bg-gray-500/50",
      text: "text-gray-500",
    },
    violet: {
      bg: "bg-violet-500/50",
      text: "text-violet-500",
    },
  };

  return colorMap[color] || { bg: "bg-gray-500/50", text: "text-gray-500" };
};

export { getColorClasses };
