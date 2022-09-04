export const utilService = {
	timeAgo,
};

function timeAgo(timeStamp: Date | number | string) {
	const date = timeStamp instanceof Date ? timeStamp : new Date(+timeStamp);
	const formatter = new Intl.RelativeTimeFormat('en');
	const ranges = {
		years: 3600 * 24 * 365,
		months: 3600 * 24 * 30,
		weeks: 3600 * 24 * 7,
		days: 3600 * 24,
		hours: 3600,
		minutes: 60,
		seconds: 1,
	};
	const secondsElapsed = (date.getTime() - Date.now()) / 1000;

	for (let key in ranges) {
		if (ranges[key] < Math.abs(secondsElapsed)) {
			const delta = secondsElapsed / ranges[key];
			let time = formatter.format(
				Math.round(delta),
				key as Intl.RelativeTimeFormatUnit
			);
			if (time.includes('in')) {
				time = time.replace('in ', '');
				time = time.replace('ago', '');
				time += ' ago';
			}
			return time ? time : 'Just now';
		}
	}
}
