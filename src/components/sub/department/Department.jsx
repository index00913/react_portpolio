import Layout from '../../common/layout/Layout';
//import styles from './Department.module.scss';
//import clsx from 'clsx';
import styles from './Department.module.scss';
import { useEffect } from 'react';

console.log(styles);

export default function Department() {
	useEffect(() => {
		//해당 useEffect구문은 컴포넌트 마운트시 한번만 동작됨
		fetch('/DB/department.json')
			.then((data) => data.json())
			.then((json) => {
				console.log(json);
			});
	}, []);
	return (
		<Layout title={'Department'}>
			<p>다파트먼트 페이지입니다.</p>
			<ul>
				<li className={styles.abc}>list1</li>
				<li>list2</li>
				<li>list3</li>
				<li>list4</li>
			</ul>
		</Layout>
	);
}
