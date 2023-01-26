# my_utils.py

import json
from collections import OrderedDict


def dict_to_jsonfile(data_dict, json_file_path):
  ''' 딕셔너리를 json 파일로 저장 '''
  with open(json_file_path, 'w') as f:
    json_data = json.dump(data_dict, f)
    
    # json_data = json.dumps(data_dict)
    # print(type(json_data), json_data)

def jsonfile_to_dict(json_file_path, is_ordered=False):
  ''' json 파일을 딕셔너리로 변환 '''
  with open(json_file_path, 'r') as f:
    if is_ordered:
      return json.load(f, object_pairs_hook=OrderedDict)
    else:
      return json.load(f)

def test_convert_dict_and_jsonfile():
  ''' 딕셔너리와 json 파일 변환 테스트 '''
  test_dict = {'a': 1, 'b': 2, 'c': 5}
  json_file_path = 'data.json'

  dict_to_jsonfile(test_dict, json_file_path)

  dict_from_json = jsonfile_to_dict(json_file_path)
  print(type(dict_from_json), dict_from_json)
  # print(jsonfile_to_dict(json_file_path, is_ordered=True))


def change_dict_key(data, old_key, new_key):
  ''' 딕셔너리의 키를 변경 '''
  if old_key in data:
    data[new_key] = data.pop(old_key)
  return data

def extract_dict_keys_values(data):
  ''' 딕셔너리의 키와 값 추출 '''
  keys = data.keys()
  values = data.values()
  return keys, values


def main():
  # test_convert_dict_and_jsonfile()


  # 초기 데이터 세팅
  test_dict = {
    "123": [1,2], "456": [3,4], "789": [], "000": [5,6]
  }
  json_file_path = 'data.json'
  dict_to_jsonfile(test_dict, json_file_path)


  data_from_jsonfile = jsonfile_to_dict(json_file_path, is_ordered=True)
  print(data_from_jsonfile)

  print("변경 후: ")

  name = ['merona', 'gugucon']
  price = [500, 1000]

  z = zip(name, price)
  # print(list(z))
  for n, p in z:
    print(n, p)


  keys, values = extract_dict_keys_values(data_from_jsonfile)
  print(type(keys), type(values))
  print(list(keys), list(values))

  td = dict(zip(keys, values))


  # print("변경 후: ")
  # data = change_dict_key(data, "123", "abc")
  # print(data)

  # print("변경 후2: ")
  # data = change_dict_key(data, "000", "abc")
  # print(data)



if __name__ == '__main__':
  main()