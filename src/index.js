import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


const alpha_num = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';

const error_enc = [
	[1,26,19],              [1,26,16],           [1,26,13],           [1,26,9],           //  1
	[1,44,34],              [1,44,28],           [1,44,22],           [1,44,16],          //  2
	[1,70,55],              [1,70,44],           [2,35,17],           [2,35,13],          //  3
	[1,100,80],             [2,50,32],           [2,50,24],           [4,25,9],           //  4
	[1,134,108],            [2,67,43],           [2,33,15,2,34,16],   [2,33,11,2,34,12],  //  5
	[2,86,68],              [4,43,27],           [4,43,19],           [4,43,15],          //  6
	[2,98,78],              [4,49,31],           [2,32,14,4,33,15],   [4,39,13,1,40,14],  //  7
	[2,121,97],             [2,60,38,2,61,39],   [4,40,18,2,41,19],   [4,40,14,2,41,15],  //  8
	[2,146,116],            [3,58,36,2,59,37],   [4,36,16,4,37,17],   [4,36,12,4,37,13],  //  9
	[2,86,68,2,87,69],      [4,69,43,1,70,44],   [6,43,19,2,44,20],   [6,43,15,2,44,16],  // 10
	[4,101,81],             [1,80,50,4,81,51],   [4,50,22,4,51,23],   [3,36,12,8,37,13],  // 11
	[2,116,92,2,117,93],    [6,58,36,2,59,37],   [4,46,20,6,47,21],   [7,42,14,4,43,15],  // 12
	[4,133,107],            [8,59,37,1,60,38],   [8,44,20,4,45,21],   [12,33,11,4,34,12], // 13
	[3,145,115,1,146,116],  [4,64,40,5,65,41],   [11,36,16,5,37,17],  [11,36,12,5,37,13], // 14
	[5,109,87,1,110,88],    [5,65,41,5,66,42],   [5,54,24,7,55,25],   [11,36,12,7,37,13], // 15
	[5,122,98,1,123,99],    [7,73,45,3,74,46],   [15,43,19,2,44,20],  [3,45,15,13,46,16], // 16
	[1,135,107,5,136,108],  [10,74,46,1,75,47],  [1,50,22,15,51,23],  [2,42,14,17,43,15], // 17
	[5,150,120,1,151,121],  [9,69,43,4,70,44],   [17,50,22,1,51,23],  [2,42,14,19,43,15], // 18
	[3,141,113,4,142,114],  [3,70,44,11,71,45],  [17,47,21,4,48,22],  [9,39,13,16,40,14], // 19
	[3,135,107,5,136,108],  [3,67,41,13,68,42],  [15,54,24,5,55,25],  [15,43,15,10,44,16],// 20
	[4,144,116,4,145,117],  [17,68,42],          [17,50,22,6,51,23],  [19,46,16,6,47,17], // 21
	[2,139,111,7,140,112],  [17,74,46],          [7,54,24,16,55,25],  [34,37,13],         // 22
	[4,151,121,5,152,122],  [4,75,47,14,76,48],  [11,54,24,14,55,25], [16,45,15,14,46,16],// 23
	[6,147,117,4,148,118],  [6,73,45,14,74,46],  [11,54,24,16,55,25], [30,46,16,2,47,17], // 24
	[8,132,106,4,133,107],  [8,75,47,13,76,48],  [7,54,24,22,55,25],  [22,45,15,13,46,16],// 25
	[10,142,114,2,143,115], [19,74,46,4,75,47],  [28,50,22,6,51,23],  [33,46,16,4,47,17], // 26
	[8,152,122,4,153,123],  [22,73,45,3,74,46],  [8,53,23,26,54,24],  [12,45,15,28,46,16],// 27
	[3,147,117,10,148,118], [3,73,45,23,74,46],  [4,54,24,31,55,25],  [11,45,15,31,46,16],// 28
	[7,146,116,7,147,117],  [21,73,45,7,74,46],  [1,53,23,37,54,24],  [19,45,15,26,46,16],// 29
	[5,145,115,10,146,116], [19,75,47,10,76,48], [15,54,24,25,55,25], [23,45,15,25,46,16],// 30
	[13,145,115,3,146,116], [2,74,46,29,75,47],  [42,54,24,1,55,25],  [23,45,15,28,46,16],// 31
	[17,145,115],           [10,74,46,23,75,47], [10,54,24,35,55,25], [19,45,15,35,46,16],// 32
	[17,145,115,1,146,116], [14,74,46,21,75,47], [29,54,24,19,55,25], [11,45,15,46,46,16],// 33
	[13,145,115,6,146,116], [14,74,46,23,75,47], [44,54,24,7,55,25],  [59,46,16,1,47,17], // 34
	[12,151,121,7,152,122], [12,75,47,26,76,48], [39,54,24,14,55,25], [22,45,15,41,46,16],// 35
	[6,151,121,14,152,122], [6,75,47,34,76,48],  [46,54,24,10,55,25], [2,45,15,64,46,16], // 36
	[17,152,122,4,153,123], [29,74,46,14,75,47], [49,54,24,10,55,25], [24,45,15,46,46,16],// 37
	[4,152,122,18,153,123], [13,74,46,32,75,47], [48,54,24,14,55,25], [42,45,15,32,46,16],// 38
	[20,147,117,4,148,118], [40,75,47,7,76,48],  [43,54,24,22,55,25], [10,45,15,67,46,16],// 39
	[19,148,118,6,149,119], [18,75,47,31,76,48], [34,54,24,34,55,25], [20,45,15,61,46,16]];//40

const char_count_bits = [
	[9, 10, 26, 12, 40, 14],
	[9,  9, 26, 11, 40, 13],
	[9,  8, 26, 16, 40, 16]];

const alignment_positions = [
    [],
    [6,18],
    [6,22],
    [6,26],
    [6,30],
    [6,34],
    [6,22,38],
    [6,24,42],
    [6,26,46],
    [6,28,50],
    [6,30,54],
    [6,32,58],
    [6,34,62],
    [6,26,46,66],
    [6,26,48,70],
    [6,26,50,74],
    [6,30,54,78],
    [6,30,56,82],
    [6,30,58,86],
    [6,34,62,90],
    [6,28,50,72,94],
    [6,26,50,74,98],
    [6,30,54,78,102],
    [6,28,54,80,106],
    [6,32,58,84,110],
    [6,30,58,86,114],
    [6,34,62,90,118],
    [6,26,50,74,98,122],
    [6,30,54,78,102,126],
    [6,26,52,78,104,130],
    [6,30,56,82,108,134],
    [6,34,60,86,112,138],
    [6,30,58,86,114,142],
    [6,34,62,90,118,146],
    [6,30,54,78,102,126,150],
    [6,24,50,76,102,128,154],
    [6,28,54,80,106,132,158],
    [6,32,58,84,110,136,162],
    [6,26,54,82,110,138,166],
    [6,30,58,86,114,142,170]];

const bch_15 = 1335;   //      101 0011 0111
const bch_18 = 7973;   //   1 1111 0010 0101
const bch_15m = 21522; // 101 0100 0001 0010

const spec_pad = [236, 17];

const log_table = Array(256);
const exp_table = Array(256);

for (let i = 0; i < 8; i++) {
	exp_table[i] = 1 << i;
}
for (let i = 8; i < 256; i++) {
	exp_table[i] = exp_table[i-8] ^ exp_table[i-6] ^ exp_table[i-5] ^ exp_table[i-4];
}

for (let i = 0; i < 255; i++) {
	log_table[exp_table[i]] = i;
}

class RSPoly {
	constructor(list) {
		var i = 0;
		while (list[i] === 0) { // remove leading zero coefficients
			i += 1;
		}

		this.vals = list.slice(i);
	}

	static gen_poly(degree) {
		var poly = new RSPoly([1]);
		for (let i = 0; i < degree; i++) {
			poly = poly.multiply(new RSPoly([1, exp_table[i]]));
		}
		return poly;
	}

	multiply(other) {
		var ret = Array(this.vals.length + other.vals.length - 1).fill(0);

		for (let i = 0; i < this.vals.length; i++) {
			for (let j = 0; j < other.vals.length; j++) {
				if (this.vals[i] > 0 && other.vals[j] > 0) {
					ret[i+j] ^= exp_table[(log_table[this.vals[i]] +
							log_table[other.vals[j]]) % 255];
				}
			}
		}

		//console.log('MULTIPLY: ' + this.vals + ' WITH ' + other.vals);
		//console.log('--- ' + ret);
		return new RSPoly(ret);
	}

	modulo(other) {
		var extra_degrees = this.vals.length - other.vals.length;
		if (extra_degrees < 0) {
			return this;
		}

		//console.log('MODULO: ' + this.vals + ' MOD ' + other.vals);

		var ret = this.vals.slice();
		for (let k = 0; k < extra_degrees + 1; k++) {
			if (ret[k] === 0) {
				continue;
			}
			let fact = log_table[ret[k]] - log_table[other.vals[0]];

			for (let j = 0; j < other.vals.length; j++) {
				if (other.vals[j] > 0) {
					ret[j + k] ^= exp_table[(log_table[other.vals[j]] + fact) % 255];
				}
			}
			//console.log('-i-' + k + '  ' + ret);
			//console.log(this.vals[k] + '(' + log_table[this.vals[k]] + ') '+
				//other.vals[0] + '(' + log_table[other.vals[0]] + ') ' + 
				//fact);
		}

		//console.log('--- ' + ret);
		return new RSPoly(ret);
	}
}

function bch_poly_degree(poly) {
	var ret = 0;
	while (poly > 0) {
		ret += 1;
		poly = poly >> 1;
	}
	return ret;
}

function bch_encode(data, ebits, poly) {
	var r = data << ebits;
	while (bch_poly_degree(r) >= bch_poly_degree(poly)) {
		r = r ^ (poly << (bch_poly_degree(r) - bch_poly_degree(poly)));
	}
	return (data << ebits) | r;
}


function charCountBits(mode, version) {
	const vals = char_count_bits[mode];
	for (let i = 0; i < vals.length; i += 2) {
		if (version <= vals[i]) {
			return vals[i+1];
		}
	}
	return 0;
}

function dec2bin(dec, len) {
	if (len === 0) return '';
	var ret = (+dec).toString(2);
	while (ret.length < len) {
		ret = '0' + ret;
	}
	return ret;
}

function copyDict(obj) {
	var ret = {};
	Object.keys(obj).forEach((key) => ret[key] = obj[key]);
	return ret;
}



function HeadedBox(props) {
	return (
		<div className="hbox">
			<div className="hbox-head">{props.header}</div>
			<div className="hbox-body">
				{props.children}
			</div>
		</div>
	);
}

class QrDataEntry extends React.Component {
	render() {
		return (
			<div className="data-entry">
				<button onClick={this.props.deleteEntry}>X</button>
				<select value={this.props.type} onChange={this.props.changeType}>
					<option value="0">numerical</option>
					<option value="1">alphanum</option>
					<option value="2">bytes</option>
				</select>&nbsp;
				<span><span>Len: {this.props.len}</span></span>&nbsp;
				<input value={this.props.string} onChange={this.props.changeData} />&nbsp;
			</div>
		);
	}
}

// list of: data_type, char_len, byte_string
class QrDataView extends React.Component {
	render() {
		var entry_list = [];
		for (let i = 0; i < this.props.list.length; i++) {
			const entry = this.props.list[i];
			entry_list.push(<QrDataEntry type={entry.type}
					len={entry.len}
					string={entry.string}
					changeType={entry.changeType}
					changeData={entry.changeData}
					deleteEntry={entry.deleteEntry} />);
		}

		return (
			<HeadedBox header="Data">
				{entry_list}
				<button onClick={this.props.onAdd}>Add</button>
			</HeadedBox>
		);
	}
}

class QrBinaryView extends React.Component {
	render() {
		var entry_list = [];
		for (let i = 0; i < this.props.list.length; i++) {
			entry_list.push(<div className="bits-entry">{this.props.list[i].string}</div>);
		}
		return (
			<HeadedBox header={this.props.name}>
				{entry_list}
			</HeadedBox>
		);
	}
}

class QrSettings extends React.Component {
	render() {
		// build version chooser
		var opts = [];
		for (let i = 1; i <= 40; i++) {
			opts.push(<option value={i}>{i}</option>);
		}

		// calculate raw storage capacity
		const version = (+this.props.version);

		var alignment_patterns = Math.floor(version / 7);
		var overlaps = 0;
		if (alignment_patterns == 0) {
			if (version > 1) {
				alignment_patterns = 1;
			}
		} else {
			overlaps = 2 * alignment_patterns;
			alignment_patterns += 2;
			alignment_patterns *= alignment_patterns;
			alignment_patterns -= 3;
		}

		var modules = 17 + 4 * version;
		modules = modules * modules - (alignment_patterns * 25 + 194 + 8 * version - 5 * overlaps) - (version > 6 ? 67 : 31);
		const codewords = Math.floor(modules / 8);
		const remainder = modules % 8;

		// calculate data codewords
		const codeblocks = error_enc[(version-1)*4 + {'L':0, 'M':1, 'Q':2, 'H':3}[this.props.error]];
		var data_codewords = 0;
		for (let i = 0; i < codeblocks.length; i += 3) {
			const [rep, total, data] = codeblocks.slice(i, i+3);
			data_codewords += rep * data;
		}

		// calculate max chars
		const max_bits_with_len = data_codewords * 8 - 4;

		var max_numerical = max_bits_with_len - charCountBits(0, version);

		var bit_rem = max_numerical % 10;
		max_numerical = Math.floor(max_numerical / 10) * 3;
		if (bit_rem >= 7) {
			max_numerical += 2;
		} else if (bit_rem >= 4) {
			max_numerical += 1;
		}

		var max_alnum = max_bits_with_len - charCountBits(1, version);
		bit_rem = max_alnum % 11;
		max_alnum = Math.floor(max_alnum / 11) * 2;
		if (bit_rem >= 6) {
			max_alnum += 1;
		}

		var max_bytes = max_bits_with_len - charCountBits(2, version);
		max_bytes = Math.floor(max_bytes / 8);

		return (
			<HeadedBox header="Settings">
				<div className="settings-choice">
					<label>Version: </label>
					<select name="version" value={this.props.version} onChange={this.props.onChange}>
						{opts}
					</select>&nbsp;
					<label>Encoding: </label>
					<select name="error" value={this.props.error} onChange={this.props.onChange}>
						<option value="L">L</option>
						<option value="M">M</option>
						<option value="Q">Q</option>
						<option value="H">H</option>
					</select>
				</div>
				<p>Raw storage capacity: {modules - remainder} (+{remainder}) bits, {codewords} bytes</p>
				<p>Actual storage capacity: {data_codewords} bytes</p>
				<p>Maximal chars: {max_numerical} numbers, {max_alnum} alpha numerical, {max_bytes} bytes</p>
			</HeadedBox>
		);
	}
}


class QrView extends React.Component {
	constructor(...args) {
		super(...args);

		this.handleDownload = this.handleDownload.bind(this);

		this.state = {png:'#'};
	}

	componentDidMount() {
		this.updateCanvas();
	}

	componentDidUpdate() {
		this.updateCanvas();
	}

	handleDownload(ev) {
		var dt = this.canvas.toDataURL('image/png');
		dt = dt.replace(/^data:image\/[^;]*/,
			'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=qrcode.png');
		//alert(dt);
		//this.setState({png: dt});
		this.dl_png.href = dt;
	}

	updateCanvas() {
		const ctx = this.canvas.getContext('2d');
		ctx.clearRect(0, 0, 800, 800);

		const modules = this.props.version * 4 + 17;
		const pixels = Math.floor(800 / (modules + 4));
		const mvals = this.props.modules;

		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, pixels * (modules+2), pixels * 2);
		ctx.fillRect(pixels * (modules+2), 0, pixels * 2, pixels * (modules+2));
		ctx.fillRect(0, pixels * 2, pixels * 2, pixels * (modules+2));
		ctx.fillRect(pixels * 2, pixels * (modules+2), pixels * (modules+2), pixels * 2);

		for (let i = 0; i < modules; i++) {
			for (let j = 0; j < modules; j++) {
				let color;
				if (mvals[j][i] === 0) {
					ctx.fillStyle = 'white';
				} else if (mvals[j][i] === 1) {
					ctx.fillStyle = 'black';
				} else {
					ctx.fillStyle = 'gray';
				}

				ctx.fillRect(pixels * (2+i), pixels * (2+j), pixels, pixels);
			}
		}
	}

	render() {
		return (
			<div>
				<div>
					<canvas ref={(input) => { this.canvas = input; }} width={800} height={800} />
				</div>
				<div><a download="qrcode.png" href="#" ref={(input) => { this.dl_png = input; }} onClick={this.handleDownload}>png</a></div>
			</div>
		);
	}
}

class QrCalculator extends React.Component {
	constructor() {
		super();

		this.handleSettingChange = this.handleSettingChange.bind(this);
		this.handleAddData = this.handleAddData.bind(this);
		this.handlePaddingChange = this.handlePaddingChange.bind(this);
		this.handleMaskChange = this.handleMaskChange.bind(this);

		this.state = {
			data_list: [], // type, len, string,  ++  key, callbacks
			binary_list: [],
			custom_padding: '',
			encoded_string: '',
			error_correction: '',
			code_data: [],
			mask: "-1",
			qr_version: '1',
			qr_error: 'L',
			needs_update: true,
		}

		//this.code_data = [];

		this.state.modules = this.newQrSize(1);
	}

	newQrSize(version) {
		const size = version * 4 + 17;
		var ret = Array(size).fill(null);
		var data_mask = Array(size).fill(null);

		for (let i = 0; i < size; i++) {
			ret[i] = Array(size).fill(null);
			data_mask[i] = Array(size).fill(0);
		}

		// finder pattern
		const finders = [[3, 3], [3, size-4], [size-4, 3]];
		for (let k = 0; k < finders.length; k++) {
			let [xs, ys] = finders[k];
			for (let i = -4; i < 5; i++) {
				for (let j = -4; j < 5; j++) {
					if (xs+i >= 0 && xs+i < size && ys+j >= 0 && ys+j < size) {
						let d = Math.max(Math.abs(i), Math.abs(j));
						if (d <= 1 || d == 3) {
							ret[ys+j][xs+i] = 1;
						} else {
							ret[ys+j][xs+i] = 0;
						}
						data_mask[ys+j][xs+i] = 1;
					}
				}
			}
		}

		// timing pattern
		for (let i = 8; i < size - 8; i++) {
			ret[6][i] = (i+1) % 2;
			ret[i][6] = (i+1) % 2;
			data_mask[i][6] = 1;
			data_mask[6][i] = 1;
		}

		// alignment pattern
		const positions = alignment_positions[version-1];
		for (let i = 0; i < positions.length; i++) {
			for (let j = 0; j < positions.length; j++) {
				if (i === 0 && j === 0 ||
						i === 0 && j === positions.length-1 ||
						i === positions.length-1 && j === 0) {
					continue;
				}
				for (let di = -2; di < 3; di++) {
					for (let dj = -2; dj < 3; dj++) {
						ret[positions[i]+di][positions[j]+dj] = (Math.max(Math.abs(di), Math.abs(dj)) + 1) % 2;
						data_mask[positions[i]+di][positions[j]+dj] = 1;
					}
				}
			}
		}

		// format information
		//alert(ret);
		this.updateFormatInfo(ret, data_mask, +this.state.mask, this.state.qr_error, version);
		
		// version information
		if (version >= 7) {
			var vdat = bch_encode(version, 12, bch_18);
			for (let i = 0; i < 18; i++) {
				let x = Math.floor(i / 3);
				let y = i % 3;
				ret[size-11+y][x] = (vdat & 1);
				ret[x][size-11+y] = (vdat & 1);
				data_mask[size-11+y][x] = 1;
				data_mask[x][size-11+y] = 1;
				vdat = vdat >> 1;
			}
		}

		this.data_mask = data_mask;
		
		return ret;
	}

	updateFormatInfo(qrdata, data_mask, mask, error, version) {
		//alert(mask + ' : ' + error + ' : ' + version);
		//alert(qrdata);
		var fdat;
		if (mask >= 0) {
			const dat = ({L:1, M:0, Q:3, H:2}[error] << 3) + mask;
			fdat = bch_encode(dat, 10, bch_15) ^ bch_15m;
			//console.log(dat.toString(2));
			//console.log(fdat.toString(2));
		} else {
			fdat  = ({L:1, M:0, Q:3, H:2}[error] << 13) ^ bch_15m;
		}

		const size = version * 4 + 17;
		const positions_a = [[8,0], [8,1], [8,2], [8,3], [8,4], [8,5], [8,7], [8,8], 
			[8, size-7], [8, size-6], [8, size-5], [8, size-4], [8, size-3], [8, size-2], [8, size-1]];
		const positions_b = [[size-1, 8], [size-2, 8], [size-3, 8], [size-4, 8], [size-5, 8], [size-6, 8],
			[size-7, 8], [size-8, 8], [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8]];
		for (let i = 0; i < positions_a.length; i++) {
			let [xa, ya] = positions_a[i];
			let [xb, yb] = positions_b[i];

			if (mask >= 0 || i > 12) {
				qrdata[ya][xa] = fdat & 1;
				qrdata[yb][xb] = fdat & 1;
			} else {
				qrdata[ya][xa] = null;
				qrdata[yb][xb] = null;
			}
			data_mask[ya][xa] = 1;
			data_mask[yb][xb] = 1;
			fdat = fdat >> 1;
		}
		qrdata[size-8][8] = 1;  // fixed dark pixel
		data_mask[size-8][8] = 1;
		return qrdata;
	}

	handleAddData(e) {
		const current_data = this.state.data_list.slice();
		const current_binary = this.state.binary_list.slice();

		var new_data = {type:'2', len:0, string:''};
		var new_bin = {string: ''};

		var new_key = -1;
		var valid = false;
		while (!valid) {
			new_key += 1;
			valid = true;
			for (let i = 0; i < current_data.length; i++) {
				if (current_data[i].key == new_key) {
					valid = false;
					break;
				}
			}
		}

		new_data.key = new_key;
		new_data.changeType = this.handlerFactory(new_key, 'type');
		new_data.changeData = this.handlerFactory(new_key, 'data');
		new_data.deleteEntry = this.handlerFactory(new_key, 'delete');
		current_data.push(new_data);

		new_bin.key = new_key;
		current_binary.push(new_bin);

		this.setState({data_list: current_data, binary_list: current_binary, needs_update: true});
	}

	handlerFactory(key, name) {
		var ret = function(e) {
			const current_data = this.state.data_list.slice();
			var idx = 0;
			while (current_data[idx].key !== key) {
				idx += 1;
			}

			if (name != 'delete') {
				current_data[idx] = copyDict(current_data[idx]);
			}

			if (name == 'type') {
				current_data[idx].type = e.target.value;
			} else if (name == 'data') {
				current_data[idx].string = e.target.value;
				current_data[idx].len = e.target.value.length;
			} else if (name == 'delete') {
				current_data.splice(idx, 1);

				const current_binary = this.state.binary_list.slice();
				current_binary.splice(idx, 1);
				this.setState({binary_list: current_binary});
			}
			this.setState({data_list: current_data, needs_update: true});
		}
		ret = ret.bind(this);
		return ret;
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.needs_update) {
			const current_data = this.state.data_list;
			const current_binary = this.state.binary_list.slice();
			const version = +this.state.qr_version;

			// translate data to binary
			for (let i = 0; i < current_data.length; i++) {
				const cType = +current_data[i].type;
				const cData = current_data[i].string;
				var res_bin = dec2bin(Math.pow(2, cType), 4) + ' ';
				res_bin += dec2bin(current_data[i].len, charCountBits(cType, version));

				if (cType === 0) { // numeric mode
					for (let j = 0; j < cData.length; j += 3) {
						res_bin += ' ';
						const piece = cData.substr(j, 3);
						res_bin += dec2bin(+piece, {3: 10, 2: 7, 1: 4}[piece.length]);
					}
				} else if (cType === 1) { // alphanum mode
					for (let j = 0; j < cData.length; j += 2) {
						res_bin += ' ';
						const piece = cData.substr(j, 2);
						if (piece.length > 1) {
							res_bin += dec2bin(alpha_num.indexOf(piece[0]) * 45 + alpha_num.indexOf(piece[1]), 11);
						} else {
							res_bin += dec2bin(alpha_num.indexOf(piece[0]), 6);
						}
					}
				} else { 
					for (let j = 0; j < cData.length; j += 1) {
						res_bin += ' ';
						res_bin += dec2bin(cData.charCodeAt(j), 8);
					}
				}

				current_binary[i] = {string: res_bin};
			}
			this.setState({binary_list: current_binary, needs_update: false});

			// finalize binary and padding
			var binary = '';
			for (let i = 0; i < this.state.binary_list.length; i++) {
				binary += this.state.binary_list[i].string;
			}

			const codeblocks = error_enc[(version-1)*4 + {'L':0, 'M':1, 'Q':2, 'H':3}[this.state.qr_error]];
			var data_codewords = 0;
			for (let i = 0; i < codeblocks.length; i += 3) {
				const [rep, total, data] = codeblocks.slice(i, i+3);
				data_codewords += rep * data;
			}

			binary = binary.replace(/\s+/g, '');

			var extra_bits = (binary.length+4) % 8;
			var minimal_padding = 4;
			if (extra_bits > 0) {
				minimal_padding += 8 - extra_bits;
			}
			if (minimal_padding + binary.length > data_codewords * 8) {
				minimal_padding = data_codewords * 8 - binary.length; // remove spaces from binary!! XXX
			}
			if (minimal_padding < 0) {
				minimal_padding = 0;
				return;
			}

			binary += dec2bin(0, minimal_padding);
			var custom_pad = this.state.custom_padding.substr(0, data_codewords*8 - binary.length);
			if (custom_pad.length % 8 != 0) {
				custom_pad += dec2bin(0, 8 - custom_pad.length % 8);
			}
			binary += custom_pad;

			console.log('Binary values: ' + binary + '  (Len: ' + binary.length + ')');

			// calculate data codewords and add spec padding
			var codewords = [];
			for (let i = 0; i < binary.length; i += 8) {
				codewords.push(parseInt(binary.substr(i, 8), 2));
			}
			while (codewords.length < data_codewords) {
				codewords.push(spec_pad[(codewords.length - Math.floor((binary.length - custom_pad.length) / 8)) % 2]);
			}

			console.log('Codewords: ' + codewords + '  (Len: ' + codewords.length + ')');
			
			// extract error correction block data
			var block_info = [];
			var total_data_words = 0;
			var total_errcor_words = 0;

			for (let i = 0; i < codeblocks.length; i += 3) {
				const [rep, total, data] = codeblocks.slice(i, i+3);
				total_data_words += data * rep;
				total_errcor_words += (total-data) * rep;

				for (let j = 0; j < rep; j++) {
					block_info.push([total, data]);
				}
			}

			// and calculate error correction codewords
			var data_blocks = [];
			var errcor_blocks = [];
			var databyte_offset = 0;
			for (let i = 0; i < block_info.length; i++) {
				const [total_words, data_words] = block_info[i];
				const ec_words = total_words - data_words;

				data_blocks.push(codewords.slice(databyte_offset, databyte_offset + data_words));
				databyte_offset += data_words;

				let rspoly = RSPoly.gen_poly(ec_words);
				let datapoly = new RSPoly(data_blocks[i].concat(Array(ec_words).fill(0)));
				let ecc_poly = datapoly.modulo(rspoly);
				
				let errcor_block = ecc_poly.vals;
				console.log(ecc_poly.vals);
				if (errcor_block.length < ec_words) {
					errcor_block.splice(0, 0, Array(ec_words - errcor_block.length).fill(0));
				}
				errcor_blocks.push(errcor_block);
				console.log('RS Block: DW ' + data_words + '  Ew ' + ec_words);
				console.log(' with' + data_blocks[i] + ' and ' + errcor_blocks[i]);
			}

			console.log('Data blocks: ' + data_blocks + '  (Len: ' + data_blocks.length + ')');
			console.log('Error correction: ' + errcor_blocks + '  (Len: ' + errcor_blocks.length + ')');

			var arrToString = (total, current, cidx) => {
				if (cidx === 0) {
					return current;
				} else {
					return total + ' ' + current;
				}
			};
			this.setState({error_correction: errcor_blocks.map((x) => x.reduce(arrToString)).reduce(arrToString)});

			// interleave words
			var final_data = [];
			for (let i = 0; i < total_data_words; i++) {
				for (let j = 0; j < block_info.length; j++) {
					if (i < data_blocks[j].length) {
						final_data.push(data_blocks[j][i]);
					}
				}
			}
			for (let i = 0; i < total_errcor_words; i++) {
				for (let j = 0; j < block_info.length; j++) {
					if (i < errcor_blocks[j].length) {
						final_data.push(errcor_blocks[j][i]);
					}
				}
			}

			console.log('Final data: ' + final_data + '  (Len: ' + final_data.length + ')');

			//this.code_data = final_data;
			this.setState({code_data: final_data});

			// place modules in code
			const size = version * 4 + 17;
			var dir = -1;
			var x = size-1;
			var y = size-1;
			var bits_placed = 0;
			while (x >= 0) {
				if (!this.data_mask[y][x]) {
					if (bits_placed < final_data.length * 8) {
						const byte_idx = Math.floor(bits_placed / 8);
						const bit_idx = bits_placed % 8;
						if (x === size-2) {
							//console.log('Position: ' + x + ':' + y);
							//console.log(bits_placed + ' ' + byte_idx + ' ' + bit_idx);
							//console.log(final_data[byte_idx]);
							//console.log(final_data[byte_idx] >> (7 - bit_idx));
							//console.log('(' + byte_idx + ':' + bit_idx + ') - ' + final_data[byte_idx] + ' ' + 
								//(7 - bit_idx) + ' ' + final_data[byte_idx] + ' ' + final_data[byte_idx] >> (7 - bit_idx));
						}

						this.state.modules[y][x] = (final_data[byte_idx] >> (7 - bit_idx)) & 1;
					} else {
						this.state.modules[y][x] = 0;
					}
					bits_placed += 1;
				}

				// next position
				let fx = (x > 6 ? x-1 : x);
				if (fx % 2 == 0) {
					x += 1;
					y += dir;
					if (y < 0 || y >= size) {
						dir *= -1;
						y += dir;
						x -= 2;
						if (x === 6) {
							x -= 1;
						}
					}
				} else {
					x -= 1;
				}
			}

			// apply masking
			this.changeMasking(this.state.modules, this.data_mask, size, -1, +this.state.mask);
			this.setState({modules: this.state.modules});
		}
	}

	changeMasking(mdata, mmask, size, oldm, newm) {
		var masking_fgen = function(mid) {
			switch (mid) {
				case -1:
					return ((i,j) => false);
				case 0:
					return ((i,j) => (i+j) % 2 === 0);
				case 1:
					return ((i,j) => i % 2 === 0);
				case 2:
					return ((i,j) => j % 3 === 0);
				case 3:
					return ((i,j) => (i+j) % 3 === 0);
				case 4:
					return ((i,j) => (Math.floor(i/2) + Math.floor(j/3)) % 2 === 0);
				case 5:
					return ((i,j) => (i * j) % 2 + (i * j) % 3 === 0);
				case 6:
					return ((i,j) => ((i * j) % 2 + (i * j) % 3) % 2 === 0);
				case 7:
					return ((i,j) => ((i * j) % 3 + (i + j) % 2) % 2 === 0);
			}
		}

		var oldf = masking_fgen(oldm);
		var newf = masking_fgen(newm);

		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				if (!mmask[i][j]) {
					if (oldf(j,i)) {
						mdata[j][i] = 1 - mdata[j][i];
					}
					if (newf(j,i)) {
						mdata[j][i] = 1 - mdata[j][i];
					}
				}
			}
		}
	}

	handlePaddingChange(e) {
		this.setState({custom_padding: e.target.value, needs_update:true});
	}

	handleMaskChange(e) {
		const value = e.target.value;
		this.setState((pState, pProp) => {
			var nmodules = this.updateFormatInfo(pState.modules, this.data_mask, +value, pState.qr_error, +pState.qr_version);
			this.changeMasking(nmodules, this.data_mask, 17 + 4* (+pState.qr_version), +pState.mask, +value);

			return {
				mask: value,
				modules: nmodules,
			};
		});
	}

	handleSettingChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		if (name == "version") {
			this.setState({
				qr_version: value,
				modules: this.newQrSize(value),
			});
		} else if (name == "error") {
			this.setState((s, p) => {
				return {
					qr_error: value,
					modules: this.updateFormatInfo(s.modules, this.data_mask, +s.mask, value, +s.qr_version),
				}
			});
		}

		this.setState({needs_update: true});
	}

	render() {
		var total_bits = 0;
		for (let i = 0; i < this.state.binary_list.length; i++) {
			total_bits += this.state.binary_list[i].string.length;
			total_bits -= (this.state.binary_list[i].string.match(/ /g) || []).length;
		}

		const codeblocks = error_enc[(+this.state.qr_version-1)*4 + {'L':0, 'M':1, 'Q':2, 'H':3}[this.state.qr_error]];
		var data_codewords = 0;
		for (let i = 0; i < codeblocks.length; i += 3) {
			const [rep, total, data] = codeblocks.slice(i, i+3);
			data_codewords += rep * data;
		}

		var extra_bits = (total_bits+4) % 8;
		var minimal_padding = 4;
		if (extra_bits > 0) {
			minimal_padding += 8 - extra_bits;
		}
		if (minimal_padding + total_bits > data_codewords * 8) {
			minimal_padding = data_codewords * 8 - total_bits;
		}
		if (minimal_padding < 0) {
			minimal_padding = 0;
		}

		return (
			<div>
				<aside className="col-1-3-L">
					<QrDataView list={this.state.data_list} onAdd={this.handleAddData} />
					<QrBinaryView name="Binary" list={this.state.binary_list} />
					<HeadedBox header="Padding">
						<div>{dec2bin(0, minimal_padding)}</div>
						<div>Custom padding: <input value={this.state.custom_padding} onChange={this.handlePaddingChange} /></div>
						<div>Used bits: {this.state.custom_padding.length+total_bits+minimal_padding}/{data_codewords*8}</div>
					</HeadedBox>
					<HeadedBox header="Error correction bits">
						<div>{this.state.error_correction}</div>
					</HeadedBox>
					<HeadedBox header="Masking pattern">
						<select value={this.state.mask} onChange={this.handleMaskChange}>
							<option value="-1">none</option>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
						</select>
					</HeadedBox>
					<QrSettings version={this.state.qr_version} error={this.state.qr_error} onChange={this.handleSettingChange} />
					<HeadedBox header="Debug">
						{this.state.code_data.join('-')}
					</HeadedBox>
				</aside>
				<section className="col-2-3-R">
					<QrView version={this.state.qr_version} modules={this.state.modules} />
				</section>
			</div>
		);
	}
}
/*
						Total bits: {total_bits}, Extra bits: {extra_bits}, Data codewords: {data_codewords},
						Minimal padding: {minimal_padding}, Test: {bch_poly_degree(16)}
						NaN test: {15 + null}, 2nd: {15 + undefined}, 3rd: {15 + NaN}
						*/


ReactDOM.render(<QrCalculator />, document.getElementById('root'));
//registerServiceWorker();
