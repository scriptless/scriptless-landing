function Badge(props) {
  return (
    <span class={`inline-flex bg- items-center px-3 py-0.5 rounded-full ${props.large ? 'xl:text-base text-sm' : 'text-sm'} font-medium ${color2class(props.color)}`}>
        {props.label}
    </span>
  )
}

function color2class(color) {
    switch(color) {
        case 'gray': return 'bg-gray-100 dark:bg-gray-300 text-gray-800';
        case 'red': return 'bg-red-100 dark:bg-red-300 text-red-800';
        case 'yellow': return 'bg-yellow-100 dark:bg-yellow-300 text-yellow-800';
        case 'orange': return 'bg-orange-100 dark:bg-orange-300 text-orange-800';
        case 'green': return 'bg-green-100 dark:bg-green-300 text-green-800';
        case 'blue': return 'bg-blue-100 dark:bg-blue-300 text-blue-800';
        case 'indigo': return 'bg-indigo-100 dark:bg-indigo-300 text-indigo-800';
        case 'purple': return 'bg-purple-100 dark:bg-purple-300 text-purple-800';
        case 'pink': return 'bg-pink-100 dark:bg-pink-300 text-pink-800';
        case 'teal': return 'bg-teal-100 dark:bg-teal-300 text-teal-800';
        case 'sky': return 'bg-sky-100 dark:bg-sky-300 text-sky-800';
        case 'emerald': return 'bg-emerald-100 dark:bg-emerald-300 text-emerald-800';
        case 'cyan': return 'bg-cyan-50 dark:bg-cyan-300 text-cyan-800';
        case 'amber': return 'bg-amber-100 dark:bg-amber-300 text-amber-800';
    }
    return 'bg-gray-100 text-gray-800';
}

export default Badge