function Badge(props) {
  return (
    <span class={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${color2class(props.color)}`}>
        {props.label}
    </span>
  )
}

function color2class(color) {
    switch(color) {
        case 'gray': return 'bg-gray-100 text-gray-800';
        case 'red': return 'bg-red-100 text-red-800';
        case 'yellow': return 'bg-yellow-100 text-yellow-800';
        case 'orange': return 'bg-orange-100 text-orange-800';
        case 'green': return 'bg-green-100 text-green-800';
        case 'blue': return 'bg-blue-100 text-blue-800';
        case 'indigo': return 'bg-indigo-100 text-indigo-800';
        case 'purple': return 'bg-purple-100 text-purple-800';
        case 'pink': return 'bg-pink-100 text-pink-800'; 
    }
    return 'bg-gray-100 text-gray-800';
}

export default Badge