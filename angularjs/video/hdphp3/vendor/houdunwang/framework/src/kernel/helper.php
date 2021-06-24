<?php
/** .-------------------------------------------------------------------
 * |  Software: [HDCMS framework]
 * |      Site: www.hdcms.com
 * |-------------------------------------------------------------------
 * |    Author: 向军 <2300071698@qq.com>
 * |    WeChat: aihoudun
 * | Copyright (c) 2012-2019, www.houdunwang.com. All Rights Reserved.
 * '-------------------------------------------------------------------*/

//表名加前缀
if ( ! function_exists( 'tablename' ) ) {
	function tablename( $table ) {
		return c( 'database.prefix' ) . $table;
	}
}

/**
 * 显示模板
 */
if ( ! function_exists( 'view' ) ) {
	function view( $tpl = '', $expire = null ) {
		return View::make( $tpl, $expire );
	}
}
/**
 * 集合
 */
if ( ! function_exists( 'collect' ) ) {
	/**
	 * @param $data
	 *
	 * @return mixed
	 */
	function collect( $data ) {
		return Collection::make( $data );
	}
}
if ( ! function_exists( 'nopic' ) ) {
	function nopic( $file ) {
		return is_file( $file ) ? $file : 'resource/images/nopic.jpg';
	}
}
/**
 * 生成url
 *
 * @param string $path 模块/动作/方法
 * @param array $args GET参数
 *
 * @return mixed|string
 */
if ( ! function_exists( 'u' ) ) {
	function u( $path, $args = [ ] ) {
		if ( empty( $path ) || preg_match( '@^http@i', $path ) ) {
			return $path;
		}
		//URL请求参数
		$urlParam = explode( '/', $_GET[ c( 'http.url_var' ) ] );
		$path     = str_replace( '.', '/', $path );
		switch ( count( explode( '/', $path ) ) ) {
			case 2:
				$path = $urlParam[0] . '/' . $path;
				break;
			case 1:
				$path = $urlParam[0] . '/' . $urlParam[1] . '/' . $path;
				break;
		}
		$url = C( 'http.rewrite' ) ? __ROOT__ : __ROOT__ . '/' . basename( $_SERVER['SCRIPT_FILENAME'] );
		$url .= '?' . c( 'http.url_var' ) . '=' . $path;
		//添加参数
		if ( ! empty( $args ) ) {
			$url .= '&' . http_build_query( $args );
		}

		return $url;
	}
}

/**
 * 操作配置项
 *
 * @param string $name
 * @param string $value
 *
 * @return mixed
 */
if ( ! function_exists( 'c' ) ) {
	function c( $name = '', $value = '' ) {
		if ( $name === '' ) {
			return Config::all();
		}

		if ( $value === '' ) {
			return Config::get( $name );
		}

		return Config::set( $name, $value );
	}
}
/**
 * 请求参数
 *
 * @param $var 变量名
 * @param null $default 默认值
 * @param string $filter 数据处理函数
 *
 * @return mixed
 */
if ( ! function_exists( 'q' ) ) {
	function q( $var, $default = null, $filter = '' ) {
		return Request::query( $var, $default, $filter );
	}
}
/**
 * 输出404页面
 */
if ( ! function_exists( '_404' ) ) {
	function _404() {
		\Response::sendHttpStatus( 302 );
		if ( is_file( c( 'view.404' ) ) ) {
			die( view( c( 'view.404' ) ) );
		}
		exit;
	}
}
if ( ! function_exists( 'model' ) ) {
	function model( $model ) {
		static $instance = [ ];
		$class = strpos( $model, '\\' ) === false ? '\system\model\\' . ucfirst( $model ) : $model;
		if ( isset( $instance[ $class ] ) ) {
			return $instance[ $class ];
		}

		return $instance[ $class ] = new $class;
	}
}

/**
 * 打印输出数据
 *
 * @param $var
 */
if ( ! function_exists( 'p' ) ) {
	function p( $var ) {
		echo "<pre>" . print_r( $var, true ) . "</pre>";
	}
}

//打印数据有数据类型
if ( ! function_exists( 'dd' ) ) {
	function dd( $var ) {
		ob_start();
		var_dump( $var );
		echo "<pre>" . ob_get_clean() . "</pre>";
	}
}

/**
 * 跳转网址
 *
 * @param $url
 * @param int $time
 * @param string $msg
 */
if ( ! function_exists( 'go' ) ) {
	function go( $url, $time = 0, $msg = '' ) {
		$url = u( $url );
		if ( ! headers_sent() ) {
			$time == 0 ? header( "Location:" . $url ) : header( "refresh:{$time};url={$url}" );
			exit( $msg );
		} else {
			echo "<meta http-equiv='Refresh' content='{$time};URL={$url}'>";
			if ( $msg ) {
				echo( $msg );
			}
			exit;
		}
	}
}
/**
 * 文件缓存
 *
 * @param $name
 * @param string $value
 * @param string $path
 *
 * @return bool
 */
if ( ! function_exists( 'f' ) ) {
	function f( $name, $value = '[get]', $expire = 0, $path = '' ) {
		$path     = $path ?: c( 'cache.file.dir' );
		$instance = Cache::driver( 'file' )->dir( $path );
		if ( is_null( $name ) ) {
			//删除所有缓存
			return $instance->flush();
		}
		switch ( $value ) {
			case '[get]':
				//获取
				return $instance->get( $name );
			case '[del]':
				//删除
				return $instance->del( $name );
			default:
				return $instance->set( $name, $value, $expire );
		}
	}
}
/**
 * 数据库缓存
 *
 * @param $key
 * @param null $value
 *
 * @return mixed
 */
if ( ! function_exists( 'd' ) ) {
	function d( $name, $value = '[get]', $expire = 0 ) {
		$instance = Cache::driver( 'mysql' );
		if ( is_null( $name ) ) {
			//删除所有缓存
			return $instance->flush();
		}
		switch ( $value ) {
			case '[get]':
				//获取
				return $instance->get( $name );
			case '[del]':
				//删除
				return $instance->del( $name );
			case '[truncate]':
				//删除所有缓存
				return $instance->flush( $name );
			default:
				return $instance->set( $name, $value, $expire );
		}
	}
}


if ( ! function_exists( 'cli' ) ) {
	function cli() {
		$argv[] = 'hd';
		foreach ( func_get_args() as $v ) {
			$argv[] = $v;
		}
		$_SERVER['argv'] = $argv;
		Cli::bootstrap();
	}
}

/**
 * 导入类库
 *
 * @param string $class
 *
 * @return bool
 */
if ( ! function_exists( 'import' ) ) {
	function import( $class ) {
		$file = str_replace( [ '@', '.', '#' ], [ APP_PATH, '/', '.' ], $class );
		if ( is_file( $file ) ) {
			require_once $file;
		} else {
			return false;
		}
	}
}
//打印用户常量
if ( ! function_exists( 'print_const' ) ) {
	function print_const() {
		$d = get_defined_constants( true );
		p( $d['form'] );
	}
}

/**
 * trace
 *
 * @param string $value 变量
 * @param string $label 标签
 * @param string $level 日志级别(或者页面Trace的选项卡)
 * @param bool|false $record 是否记录日志
 *
 * @return mixed
 */
if ( ! function_exists( 'trace' ) ) {
	function trace( $value = '[hdphp]', $label = '', $level = 'DEBUG', $record = false ) {
		return Error::trace( $value, $label, $level, $record );
	}
}
/**
 * 全局变量
 *
 * @param $name 变量名
 * @param string $value 变量值
 *
 * @return mixed 返回值
 */
if ( ! function_exists( 'v' ) ) {
	function v( $name = null, $value = '[null]' ) {
		static $vars = [ ];
		if ( is_null( $name ) ) {
			return $vars;
		} else if ( $value == '[null]' ) {
			//取变量
			$tmp = $vars;
			foreach ( explode( '.', $name ) as $d ) {
				if ( isset( $tmp[ $d ] ) ) {
					$tmp = $tmp[ $d ];
				} else {
					return null;
				}
			}

			return $tmp;
		} else {
			//设置
			$tmp = &$vars;
			foreach ( explode( '.', $name ) as $d ) {
				if ( ! isset( $tmp[ $d ] ) ) {
					$tmp[ $d ] = [ ];
				}
				$tmp = &$tmp[ $d ];
			}

			return $tmp = $value;
		}
	}
}

/**
 * 反转义
 *
 * @param array $data
 *
 * @return mixed
 */
//if ( ! function_exists( 'unaddslashes' ) ) {
//	function unaddslashes( &$data ) {
//		foreach ( (array) $data as $k => $v ) {
//			if ( is_numeric( $v ) ) {
//				$data[ $k ] = $v;
//			} else {
//				$data[ $k ] = is_array( $v ) ? unaddslashes( $v ) : stripslashes( $v );
//			}
//		}
//
//		return $data;
//	}
//}

if ( ! function_exists( 'confirm' ) ) {
	/**
	 * 有确定提示的提示页面
	 *
	 * @param string $message 提示文字
	 * @param string $sUrl 确定按钮跳转的url
	 * @param string $eUrl 取消按钮跳转的url
	 */
	function confirm( $message, $sUrl, $eUrl ) {
		View::with( [ 'message' => $message, 'sUrl' => $sUrl, 'eUrl' => $eUrl ] );
		echo view( Config::get( 'view.confirm' ) );
		exit;
	}
}

if ( ! function_exists( 'ajax' ) ) {
	/**
	 * Ajax输出
	 *
	 * @param  mixed $data 数据
	 * @param string $type 数据类型 text html xml json
	 */
	function ajax( $data, $type = "JSON" ) {
		Response::ajax( $data, $type );
	}
}

/**
 * 获取客户端ip
 */
if ( ! function_exists( 'clientIp' ) ) {
	function clientIp( $type = 0 ) {
		$type = intval( $type );
		//保存客户端IP地址
		if ( isset( $_SERVER ) ) {
			if ( isset( $_SERVER["HTTP_X_FORWARDED_FOR"] ) ) {
				$ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
			} else if ( isset( $_SERVER["HTTP_CLIENT_IP"] ) ) {
				$ip = $_SERVER["HTTP_CLIENT_IP"];
			} else if ( isset( $_SERVER["REMOTE_ADDR"] ) ) {
				$ip = $_SERVER["REMOTE_ADDR"];
			} else {
				return '';
			}
		} else {
			if ( getenv( "HTTP_X_FORWARDED_FOR" ) ) {
				$ip = getenv( "HTTP_X_FORWARDED_FOR" );
			} else if ( getenv( "HTTP_CLIENT_IP" ) ) {
				$ip = getenv( "HTTP_CLIENT_IP" );
			} else if ( getenv( "REMOTE_ADDR" ) ) {
				$ip = getenv( "REMOTE_ADDR" );
			} else {
				return '';
			}
		}
		$long     = ip2long( $ip );
		$clientIp = $long ? [ $ip, $long ] : [ "0.0.0.0", 0 ];

		return $clientIp[ $type ];
	}
}

if ( ! function_exists( 'message' ) ) {
	/**
	 * 消息提示
	 *
	 * @param string $content 消息内容
	 * @param string $redirect 跳转地址有三种方式 1:back(返回上一页)  2:refresh(刷新当前页)  3:具体Url
	 * @param string $type 信息类型  success(成功），error(失败），warning(警告），info(提示）
	 */
	function message( $content, $redirect = 'back', $type = 'success', $timeout = 2 ) {
		if ( IS_AJAX ) {
			ajax( [ 'valid' => $type == 'success' ? 1 : 0, 'message' => $content ] );
		} else {
			switch ( $redirect ) {
				case 'back':
					//有回调地址时回调,没有时返回主页
					$url = 'window.history.go(-1)';
					break;
				case 'refresh':
					$url = "location.replace('" . __URL__ . "')";
					break;
				default:
					if ( empty( $redirect ) ) {
						$url = 'window.history.go(-1)';
					} else {
						$url = "location.replace('" . u( $redirect ) . "')";
					}
					break;
			}
			//图标
			switch ( $type ) {
				case 'success':
					$ico = 'fa-check-circle';
					break;
				case 'error':
					$ico = 'fa-times-circle';
					break;
				case 'info':
					$ico = 'fa-info-circle';
					break;
				case 'warning':
					$ico = 'fa-warning';
					break;
			}
			View::with( [
				'content'  => $content,
				'redirect' => $redirect,
				'type'     => $type,
				'url'      => $url,
				'ico'      => $ico,
				'timeout'  => $timeout * 1000
			] );
			echo view( Config::get( 'view.message' ) );
		}
		exit;
	}
}


if ( ! function_exists( 'csrf_field' ) ) {
	//CSRF 表单
	function csrf_field() {
		return "<input type='hidden' name='csrf_token' value='" . Session::get( 'csrf_token' ) . "'/>\r\n";
	}
}

if ( ! function_exists( 'method_field' ) ) {
	//CSRF 表单
	function method_field($type) {
		return "<input type='hidden' name='_method' value='" .strtoupper($type) . "'/>\r\n";
	}
}

if ( ! function_exists( 'csrf_token' ) ) {
	//CSRF 值
	function csrf_token() {
		return Session::get( 'csrf_token' );
	}
}

if ( ! function_exists( 'encrypt' ) ) {
	//加密
	function encrypt( $content ) {
		return Crypt::encrypt( $content, 'hdphp.com' );
	}
}

if ( ! function_exists( 'decrypt' ) ) {
	//加密
	function decrypt( $content ) {
		return Crypt::decrypt( $content, 'hdphp.com' );
	}
}