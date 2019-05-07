class News extends React.Component {
	render() {
		return (
			<div className="news">
				К сожалению. новостей нет.
			</div>
		)
	}
}

class Comments extends React.Component {
	render() {
		return (
			<div className="comments">
				Нет новостей - комментировать нечего.
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div className="app">
				Всем привет, я компонент App! Я умею отображать новости.
				<News />
				<Comments />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)